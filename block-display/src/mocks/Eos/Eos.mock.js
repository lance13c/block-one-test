import mockData from "./Eos.mockdata.json";

export default class Eos {
    constructor() {
        try {
            this.data = JSON.parse(mockData);
        } catch (e) {
            throw new Error(e);
        }

        setInterval(() => {
            this.data.get_info.head_block_num ++;
        }, 1000);
    }

    getInfo(obj) {
        return new Promise((resolve, reject) => {
            if (obj === undefined) {
                reject();
            } else {
                resolve(this.data.get_info);
            }
        });
    }    

    getBlock(number) {
        return new Promise((resolve, reject) => {
            if (number !== typeof(Number)) {
                reject();
            } else {
                this.data.get_block.block_num = number;
                resolve(this.data.get_block);
            }
        });
    }
}