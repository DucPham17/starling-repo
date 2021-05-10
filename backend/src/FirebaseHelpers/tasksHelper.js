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

const filterTodosByTags = async (userId, tag, status, date) => {
    const listTodos = [];

    let tagRef = db.collection('tasks');

    if (tag === 'Work'){
        tagRef = db.collection('tasks').where('tag', '==', 'Work');
    } else if (tag === 'Shopping') {
        tagRef = db.collection('tasks').where('tag', '==', 'Shopping');
    } else if (tag === 'Errands'){
        tagRef = db.collection('tasks').where('tag', '==', 'Errands');
    } else if (tag === 'Personal') {
        tagRef = db.collection('tasks').where('tag', '==', 'Personal');
    }

    let filterComplete = tagRef;

    if (status === 'active'){
        filterComplete= tagRef.where('isCompleted', '==', false)
    } else if (status === 'completed'){
        filterComplete = tagRef.where('isCompleted', '==', true)
    }

    const snapshot = await filterComplete.get();

    await snapshot.forEach(doc => {
        if (doc.data().userId === userId && doc.data().date === date) {
            listTodos.push(doc.data());
        }
    });

    return listTodos;
}

const filterTodosByDate = async (userId, choice, recent) => {
    const listTodos = [];

    let tagRef = db.collection('tasks').where('userId', '==', userId);
    
    const snapshot = await tagRef.get();
    const time = new Date(recent).getTime();

    await snapshot.forEach(doc => {
        const day = new Date(doc.data().date).getTime()
        if (choice == '3 Recent Days') {
            if (day <= time && day > (time - (86400000 * 2)) ) {
                listTodos.push(doc.data());
            }
        } else if (choice == 'Coming Soon') {
            if (day > time) {
                listTodos.push(doc.data());
            }
        }else {
            if (day <= time && day > (time - (86400000 * 6)) ) {
                listTodos.push(doc.data());
            }
        }
        
    });

    return listTodos;
}

module.exports = {
    getAllTasks,
    addTask,
    toggleTask,
    updateTask,
    deleteTask,
    filterTodosByTags,
    filterTodosByDate
};