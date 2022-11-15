
(() => {
    "use strict";

    const templates = [
        "我的第一次泪如涌泉给了《未闻花名》\n我的第一次嚎啕大哭给了《言叶之庭》\n我的第一次抽泣不止给了《秒速五厘米》\n我的第一次泣不成声给了《大鱼海棠》\n我的第一次声泪俱下给了《你的名字》\n我的第一次痛哭流涕给了《萤火之森》\n我的第一次抱头痛哭给了《声之形》\n我的第一次泪流满面给了《四月是你的谎言》\n我的第一次给了{0}[给心心][给心心][给心心]"
    ];

    const choice = list => {
        return list[Math.trunc(Math.random() * list.length)];
    }

    const dynamo = (() => {

        return {
            electronic: name => {
                return choice(templates).replace("{0}", name)
            }
        };

    })();

    const _Power = dynamo.electronic("尼禄");
    console.log(_Power);

})();