// 顯示一個訊息：使用 Promise，在延遲 1 秒後，在控制台打印出 "Hello, world!"。
const showDelayedMsg = new Promise((res, rej) => {
  setTimeout(() => {
    const DelayedMsg = "Hello, World!";
    res(DelayedMsg);
  }, 1000);
});

showDelayedMsg.then((DelayedMsg) => {
  console.log(DelayedMsg);
});

// 延遲執行：使用 async/await，創建一個函數，該函數將延遲 3 秒後返回一個 Promise。然後使用 await 來等待 Promise 完成，並在控制台打印出 "Delay complete!"。

let num = 0;
const testPromise = () => {
    return new Promise((res, rej) => {
    setTimeout(() => {
      num++;
      console.log(num)
      res();
    }, 3000);
  });
};

const testAsync = async () => {
  console.log("Delay start");
  await testPromise();
  console.log("Delay complete!");
};
testAsync();
// const executeStep2 = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Step 2");
//             res();
//         }, 2000)
//     });
// };

// const main = async () => {
//     console.log("Step 1");
//     await executeStep2();
//     console.log("Step3");
// }

// main();



// 處理錯誤：創建一個 Promise，該 Promise resolve 或 reject。使用 async/await 在控制台打印出相應的訊息，如果 Promise 成功，則打印出 "Promise resolved!"，如果 Promise 失敗，則打印出 "Promise rejected!"。
let answer = 1;

const handleErrorPromise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const resolveMsg = 'resolved successful!';
            const rejectMsg = 'rejected! resolved unsuccess!'
            if(answer == 1) {
                res(resolveMsg);
                console.log(resolveMsg);
            } else {
                rej(rejectMsg);
                console.log(rejectMsg)
            }
        }, 5000)
    }).catch((rej) => {
        console.log('error')
    })
}

async function getPromiseResult() {
    await handleErrorPromise();
}

getPromiseResult();
// 順序執行多個 Promise：創建三個 Promise：Promise A 在 2 秒後 resolve，Promise B 在 1 秒後resolve，Promise C 在 3 秒後resolve。使用 Promise 和 async/await，在它們依次解析完成後，在控制台打印出 "All promises resolved!"
const firstPromise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("The first promise is resolved")
            res();
        }, 2000)
    })
};

const secondPromise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("The second promise is resolved")
            res();
        }, 1000)
    })
};

const thirdPromise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("The third promise is resolved")
            res();
        }, 3000)
    })
};

async function printAllPromises() {
    await firstPromise();
    await secondPromise();
    await thirdPromise();
    console.log("All promises resolved!")
}

printAllPromises();