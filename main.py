# -- coding: utf-8 --

import json


def LoadJsonFile(filename):
    with open(filename, "r", encoding="utf-8") as file:
        return json.load(file)["bili"]


if __name__ == "__main__":
    bili = LoadJsonFile("template.json")
    print(bili[0].replace("{0}", "纳西妲"))
