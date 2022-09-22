function UseWhatsapp(mobileNumber, message) {
  let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

  let url = `https://api.whatsapp.com/send/?phone=${number}`;

  url += `&text=${encodeURI(message)}&app_absent=0`;

  window.open(url);
};

export default UseWhatsapp