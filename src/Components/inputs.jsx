export default function Widget() {
  let btn = document.querySelector("#btn");
  let name = document.querySelector("#company-name");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");

  let nameValue = "";
  let emailValue = "";
  let phoneValue = "";
  let locateValue = "";
  let descValue = "";
  let city = "";
  let country = "";
  let count = "";
  function nameShow(event) {
    nameValue = event.target.value;
  }
  function emailShow(event) {
    emailValue = event.target.value;
  }
  function phoneShow(event) {
    phoneValue = event.target.value;
  }
  function locateShow(event) {
    locateValue = event.target.value;
  }
  function descShow(event) {
    descValue = event.target.value;
  }
  function changeCity(event) {
    city = event.target.value;
  }
  function changeCountry(event) {
    country = event.target.value;
  }
  function countOfPeopple(event) {
    count = event.target.value;
  }
  function Res() {
    if (nameValue.length == 0 || nameValue.length == 2) {
      alert("name is short minimum length must be more 3 characters");
      return;
    }
    if (emailValue.includes("@gmail.com")) {
    } else {
      alert("this is not email");
      return;
    }
    if (phoneValue.length <= 7) {
      alert("phone is wrong");
      return;
    }
    if (locateValue.length <= 3) {
      alert("locate is udefined");
      return;
    }
    if (descValue.length <= 10) {
      alert("description is too short");
      return;
    }
    if (city == "Shahar") {
      alert("dont be stupid choose your city");
      return;
    }
    if (country == "Davlat") {
      alert("dont be stupid choose your country");
      return;
    }

    let about = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      locate: locateValue,
      description: descValue,
      city: city,
      country: country,
      countOfPeople: count,
    };
    if (localStorage.getItem("companies")) {
      let res = localStorage.getItem("companies");
      let arr = JSON.parse(res);
      arr.push(about);
      localStorage.setItem("companies", JSON.stringify(arr));
    } else {
      let companies = [];
      companies.push(about);
      localStorage.setItem("companies", JSON.stringify(companies));
    }
    alert("succes");
  }
  return (
    <div className="bg-background p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-foreground mb-4">
        Kompaniya ma’lumotlari
      </h2>
      <p className="text-muted-foreground mb-6">
        Kompaniya haqidagi ma’lumotlarni kiriting
      </p>
      <div className="mb-4">
        <label className="block text-muted-foreground" htmlFor="company-name">
          Kompaniya nomi *
        </label>
        <input
          onInput={nameShow}
          className="border border-border rounded-lg p-2 w-full"
          type="text"
          id="company-name"
          placeholder="Kompaniya nomi"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-muted-foreground" htmlFor="email">
          Email *
        </label>
        <input
          onInput={emailShow}
          className="border border-border rounded-lg p-2 w-full"
          type="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-muted-foreground" htmlFor="phone">
          Telefon raqami *
        </label>
        <input
          onInput={phoneShow}
          className="border border-border rounded-lg p-2 w-full"
          type="text"
          id="phone"
          placeholder="UZ +9999"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-muted-foreground">Linklar *</label>
        <div className="flex space-x-2">
          <button className="border border-border rounded-lg p-2">
            <i className="fa-solid fa-vector-square"></i>
          </button>
          <button className="border border-border rounded-lg p-2">
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button className="border border-border rounded-lg p-2">
            <i className="fa-brands fa-telegram"></i>
          </button>
          <button className="border border-border rounded-lg p-2">
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button className="border border-border rounded-lg p-2">
            <i className="fa-brands fa-github"></i>
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-muted-foreground" htmlFor="country">
          Davlat *
        </label>
        <select
          onChange={changeCountry}
          className="border border-border rounded-lg p-2 w-full"
          id="country"
          required
        >
          <option value="">Davlat</option>
          <option value="">Uzbekistan</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-muted-foreground" htmlFor="city">
          Shahar *
        </label>
        <select
          onChange={changeCity}
          className="border border-border rounded-lg p-2 w-full"
          id="city"
          required
        >
          <option value="">Shahar</option>
          <option value="fergana">Fergana</option>
          <option value="tashlent">Tashkent</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-muted-foreground" htmlFor="location">
          Yashashi joyi *
        </label>
        <input
          onInput={locateShow}
          className="border border-border rounded-lg p-2 w-full"
          type="text"
          id="location"
          placeholder="Joy"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-muted-foreground" htmlFor="employees">
          Hodimlar soni *
        </label>
        <select
          onChange={countOfPeopple}
          className="border border-border rounded-lg p-2 w-full"
          id="employees"
          required
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="10+">10+</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-muted-foreground" htmlFor="description">
          Izoh *
        </label>
        <textarea
          onInput={descShow}
          className="border border-border rounded-lg p-2 w-full"
          id="description"
          placeholder="Kompaniya haqida izoh qiling"
          required
        ></textarea>
      </div>

      <div className="flex justify-between">
        <button className="bg-muted text-muted-foreground hover:bg-muted/80 rounded-lg p-2">
          ORTGA
        </button>
        <button
          onClick={Res}
          id="btn"
          className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg p-2"
        >
          KEYINGISI
        </button>
      </div>
    </div>
  );
}
