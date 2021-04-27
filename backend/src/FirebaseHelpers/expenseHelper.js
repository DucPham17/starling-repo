require("firebase/auth");
const admin = require('firebase-admin');
const db = admin.firestore();

const getAllExpenses = async (userId) => {
    const list = [];
    const postRef = db.collection('expenses');
    const snapshot = await postRef.get();

    await snapshot.forEach(doc => {
        //console.log(doc.data().userId);
        if (doc.data().userId === userId) {
            list.push(doc.data());
        }
    });

    return list;
}

const addExpense = async (item) => {
    await db.collection('expenses').add(item);
}

const deleteExpense = async (userId, date) => {
    const postRef = db.collection('expenses');
    const snapshot = await postRef.get();
    var target = null;

    await snapshot.forEach(doc => {
        if (doc.data().date == date && doc.data().userId == userId) {
            target = doc.id;
        }
    });
    await db.collection('expenses').doc(target).delete()
}

const updateExpense = async (item) => {
    const postRef = db.collection('expenses');
    const snapshot = await postRef.get();
    var target = null;
    console.log('here')

    await snapshot.forEach(doc => {
        if (doc.data().date == item.date && doc.data().userId == item.userId) {
            target = doc.id; 
        }
    });
    await db.collection('expenses').doc(target).update({
        name: item.name,
        amount: item.amount,
        expenseType: item.expenseType
    })

}

const filterExpenses = async (userId, choiceDate, choiceType) => {
    const list = [];
    let choiceRef = db.collection('expenses');
    if (choiceType == 'Spending') {
        choiceRef = db.collection('expenses').where('expenseType', '==', 'Spending');
    } else if (choiceType == 'Earning') {
        choiceRef = db.collection('expenses').where('expenseType', '==', 'Earning');
    }
    let dateRef = choiceRef
    if (choiceDate == '3 Recent Days') {
        const recent = new Date().getMilliseconds - (86400000 * 3) 
        dateRef = choiceRef.where('date', '>=', recent);
    } else if (choiceDate == 'One week') {
        const week = new Date().getMilliseconds - (86400000 * 7) 
        dateRef = choiceRef.where('date', '>=', week);
    } else if (choiceDate == 'Today') {
        const today = new Date().getMilliseconds - (86400000)
        dateRef = choiceRef.where('date', '>=', today); 
    }
    const snapshot = await dateRef.get();

    await snapshot.forEach(doc => {
        //console.log(doc.data().userId);
        if (doc.data().userId === userId) {
            list.push(doc.data());
        }
    });
    console.log(list)
    return list;
}

module.exports = {
    getAllExpenses,
    addExpense,
    deleteExpense,
    updateExpense,
    filterExpenses
};