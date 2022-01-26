let db;

// request for new db, budget database
const request = indexedDB.open("budgetDb", 1);

// create object store whenever a thing is update/change
request.onupgradeneeded = (event) => {
  db = event.target.result;

  // creating object store names budgetStore         ||   add keypath to keep track of data?
  const budgetStore = db.createObjectStore("budget", { autoIncrement: true });
  //   budgetStore.createIndex("") Do i need an index?
};

// logs the error
request.onerror = function (event) {
  console.log(event.target.errorCode);
};

// if successfull
request.onsuccess = (event) => {
  console.log("success");
  // make a function call here
  // whats the navigator
  if (navigator.onLine) {
  }
};

const saveInput = (input) => {
// do I need to define db as request.result or no?


  // opens transaction to allow acces to budget objectStore
  const transaction = db.transaction(["budget"], "readwrite");
  // access buget object store
  const budgetStore = transaction.ObjectStore("budget");
  // adds input
  budgetStore.add(input);
};
