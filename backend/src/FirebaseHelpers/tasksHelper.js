require("firebase/auth");
const admin = require('firebase-admin');
const db = admin.firestore();

const getAllTasks = async (userId, date) => {
    const list = [];
    const postRef = db.collection('tasks');
    const snapshot = await postRef.get();
    await snapshot.forEach(doc => {
        const data = doc.data();

        if (data.userId === userId && data.date === date) {
            list.push(data);
        }
    });

    return list
};

const addTask = async (task) => {
    await db.collection('tasks').add(task);
    
};

const toggleTask = async (task) => {
    const postRef = db.collection('tasks');
    const snapshot = await postRef.get();
    var target = null;
    await snapshot.forEach(doc => {
        const data = doc.data();
        if (data.userId === task.userId && data.date === task.date && data.title === task.title &&
            data.tag === task.tag && data.isCompleted === task.isCompleted) {
            target = doc.id;
        }
    });
    await db.collection('tasks').doc(target).update(
        {   
        isCompleted: !task.isCompleted,
        })
}

const updateTask = async (item) => {
    const postRef = db.collection('tasks');
    const snapshot = await postRef.get();
    var target = null;

    await snapshot.forEach(doc => {
        const data = doc.data();
        if (data.userId === item.userId && data.date === item.date){
            target = doc.id;
        }
    })

    if (target !== null){
        await db.collection('tasks').doc(target).update({
            title: item.title,
            tag: item.tag, 
    })

    }
   
}

const deleteTask = async (item) => {
    const postRef = db.collection('tasks');
    const snapshot = await postRef.get();
    var target = null;

    await snapshot.forEach(doc => {
        const data = doc.data();
        if (data.userId === item.userId && data.date === item.date && data.title === item.title 
            && data.tag === item.tag){
            target = doc.id;
        }
    })
    await db.collection('tasks').doc(target).delete()
    
   
}

module.exports = {
    getAllTasks,
    addTask,
    toggleTask,
    updateTask,
    deleteTask,
};