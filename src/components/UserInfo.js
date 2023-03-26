export default class UserInfo {
  constructor({selectorName, selectorJob}) {
    this._profileName = document.querySelector(selectorName);
    this._profileJob = document.querySelector(selectorJob);
  }
  
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent
    };
  }

  setUserInfo({name, job}) {
    // Вставьте новые значения с помощью textContent
    this._profileName.textContent = name;
    this._profileJob.textContent =  job;
  }
}

  