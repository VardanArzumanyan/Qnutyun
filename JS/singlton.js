class Singleton {
  static instance = null;
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  fetch(url) {
    return this.fetchData(url);
  }

  async fetchData(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  }
}

const instance = new Singleton();
const instance2 = new Singleton();
console.log(instance === instance2);


Array.prototype.groupBy = function(key) {
    return this.reduce((res, obj) => {
        const groupKey = obj[key];
        if (!res[groupKey]) {
            res[groupKey] = [];
        }
        res[groupKey].push(obj);
        return res;
    }, {});
};

