console.log(firebase)

const db = firebase.firestore();

let collectionRef;
let unsubscribe;

collectionRef = db.collection('articles').orderBy('timestamp', 'desc')


function search(ele) {
    if (event.key === 'Enter') {
        searchTerm.innerHTML = `<p> ${ele.value}</p>`;

        unsubscribe = collectionRef

            .where("wordList", "array-contains", `${ele.value.toLowerCase()}`)
            .onSnapshot(querySnapshot => {
                const items = querySnapshot.docs.map(doc => {

                    return `<li><a href = ${doc.data().Link}> ${doc.data().Headline}</a>:<br>  ${doc.data().Intro} <br> ${doc.data().timestamp.toDate()}</li>`
                });

                articleList.innerHTML = (items.length > 0) ? items.join("\n") : "Looks like nothing is there sorry"


            }


            )
    }
}



