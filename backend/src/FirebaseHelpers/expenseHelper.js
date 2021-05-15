require("firebase/auth");
const admin = require('firebase-admin');
const db = admin.firestore();

const getAllExpenses = async (userId) => {
    const list = [];
    const postRef = db.collection('expenses');
    const snapshot = await postRef.get();

    await snapshot.forEach(doc => {
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
    const time = new Date()
    const begin = new Date(time.getFullYear(), time.getMonth(), time.getDate(), 0, 0)
    if (choiceDate == '3 Recent Days') {
        const recent = begin.getTime() - (86400000 * 2) 
        dateRef = choiceRef.where('date', '>=', recent);
    } else if (choiceDate == 'One week') {
        const week = begin.getTime() - (86400000 * 6) 
        dateRef = choiceRef.where('date', '>=', week);
    } else if (choiceDate == 'Today') {
        dateRef = choiceRef.where('date', '>=', begin.getTime()); 
    }
    const snapshot = await dateRef.get();

    await snapshot.forEach(doc => {
        if (doc.data().userId === userId) {
            list.push(doc.data());
        }
    });

    //order by time from this web
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?fbclid=IwAR0zBbQnAEbZ5iepQp0cSSarH5bb1p0aZYc_2P6rVM9yRgom9AZHW88kLgE

    list.sort(function (a, b) {
        let aTime = new Date(a.date).getTime()
        let bTime = new Date(b.date).getTime()
        return bTime - aTime;
    });
    return list;
}

module.exports = {
    getAllExpenses,
    addExpense,
    deleteExpense,
    updateExpense,
    filterExpenses
};