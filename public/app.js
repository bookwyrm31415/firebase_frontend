console.log(firebase)

const db = firebase.firestore();

let collectionRef;
let unsubscribe;

collectionRef = db.collection('articles')


unsubscribe = collectionRef

        .where("wordList", "array-contains", "Covid")
        .onSnapshot( querySnapshot => {
            const items = querySnapshot.docs.map(doc =>{

                return `<li> ${doc.data().Headline}</li>`
            });

            articleList.innerHTML = items.join("\n")


        }


        )