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

module.exports = {
    getAllTasks,
    addTask
};