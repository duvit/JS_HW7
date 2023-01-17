//1. Создать поиск кандидатов в массиве candidateArr по номеру телефона.
//Номер телефона может быть указан не полностью и в любом формате.

const searchCandidatesByPhoneNumber = (phone) => {
  const candidatesByPhone = candidateArr.filter(
    (el) => el.phone.replace(/\D/g, "").indexOf(phone.replace(/\D/g, "")) != -1
  );

  return candidatesByPhone;
};

// console.log(searchCandidatesByPhoneNumber("43"));

// console.log(searchCandidatesByPhoneNumber("+1(869) 40"));

// console.log(searchCandidatesByPhoneNumber("+1(869)408-39-82"));

//2. Создать функию которая найдет кандидата по  _id и вернет его из массива candidatesArr
//c отформатированной датой регистрации (поле registred). Дата должна иметь формат DD/MM/YY.

const getCandidateById = (id) => {
  const candidate = candidateArr.filter((el) => el._id === id)[0];

  candidate.registered = candidate.registered
    .replace("T", "-")
    .split("-")
    .slice(0, 3)
    .reverse()
    .join("/");

  return candidate;
};

// console.log(getCandidateById("5e216bc95983a76c8461f88f"));

//3. Написать функцию которая будет сортировать массив canidatesArr по количеству денег лежащих на балансе
//(смотрим свойство balance)   в том порядке, в котором ей укажут в аргементе sortBy.
//Если параметр не был передан, то вернет массив в первоначальном состоянии.

const sortCandidatesArr = (sortBy) => {
  const candidatesArr = [...candidateArr];

  if (sortBy === "desc") {
    candidatesArr.sort((a, b) => {
      if (a.balance > b.balance) {
        return -1;
      }
    });
  } else if (sortBy === "asc") {
    candidatesArr.sort((a, b) => {
      if (a.balance < b.balance) {
        return -1;
      }
    });
  } else {
    return candidatesArr;
  }

  return candidatesArr;
};

// console.log(sortCandidatesArr("asc"));
// console.log(sortCandidatesArr("desc"));
// console.log(sortCandidatesArr());

//4. Написать функцию, которая вернет объект в котором название ключей будут цвета глаз,
//а значением - массив с кандидатами имеющие такой цвет глаз.
//При этом нельзя самому указывать первоначальный объект с возможными вариантами цветами глаз,
//а сгенерировать их на основе массива с кандидатами, то есть пройтись по массиву candidatesArr
//и брать смотреть на свойство eyeColor и добавлять значение цвета глаз кандидата как ключ объекта,
//если такого ключа не существует, ну и не добавлять - если  одноименный ключ уже существует

const getEyeColorMap = () => {
  const candidatesArr = [...candidateArr];
  const eyesColorObj = {};

  candidatesArr.forEach((el) => {
    if (Object.hasOwn(eyesColorObj, el.eyeColor)) {
      eyesColorObj[el.eyeColor].push(el);
    } else {
      eyesColorObj[el.eyeColor] = [];
      eyesColorObj[el.eyeColor].push(el);
    }
  });

  return eyesColorObj;
};

// console.log(getEyeColorMap());
// {
//    grey:  [Candidate, Candidate, Candidate, Candidate ...],
//    blue:  [Candidate, Candidate, Candidate, ...],
//    green: [Candidate, Candidate, Candidate, Candidate, Candidate ...]
//    ... etc.
// }
