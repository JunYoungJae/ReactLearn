const faker = require('faker');
const Member = require('./models/Member');
const Master = require('./models/Master');
const pg = require('./DB/pg.js');

generateMasterFakeData = async (count) => {
  try {
    var item;

    for (let i = 0; i < count + 13; i++) {
      item = {
        masterNo: '',
        masterName: faker.internet.userName(),
        gender: '02',
        email: faker.internet.email(),
        status: '01',
        mobile: faker.phone.phoneNumber(),
        password: '1q2w3e4r5t',
        address: '서울시 강남구 청담동',
        lat: '36.1145' + parseInt(Math.random() * 100).toString(),
        lng: '126.7778' + parseInt(Math.random() * 100).toString(),
        category: '1020202',
        token: '',
        regitster_id: 'MOBILE',
      };
      var master = new Master();
      var result = await master.insertMaster(item);

      console.log('fake data inserting to database...');
    }
  } catch (err) {
    console.log(err);
  }
};

generateFakeData = async (count) => {
  try {
    var item;
    var _no = '000000000000000';

    for (let i = 0; i < count; i++) {
      item = new Member(
        '', //String(_no + memberNo.toString()).substr( String(_no + memberNo.toString()).length-10, 10)
        faker.internet.userName(),
        '01',
        faker.internet.email(),
        '01',
        faker.phone.phoneNumber(),
        '1q2w3e4r5t',
        '서울시 서대문구 연희동',
        '36.1145' + parseInt(Math.random() * 100).toString(),
        '126.7778' + parseInt(Math.random() * 100).toString(),
        null,
        'MOBILE'
      );
      var result = await item.insertMember(item);

      console.log('fake data inserting to database...');
    }
  } catch (err) {
    console.log(err);
  }
};

var categoryList = [
  {
    categoryCode: '1000000',
    categoryLevel: '0',
    categoryName: '서비스 전체',
    parentCategoryCode: '0000000',
    categoryOrder: '1',
  },
  {
    categoryCode: '1010000',
    categoryLevel: '1',
    categoryName: '레슨',
    parentCategoryCode: '1000000',
    categoryOrder: '2',
  },
  {
    categoryCode: '1010100',
    categoryLevel: '2',
    categoryName: '학업',
    parentCategoryCode: '1010000',
    categoryOrder: '3',
  },
  {
    categoryCode: '1010101',
    categoryLevel: '3',
    categoryName: '영어 과외',
    parentCategoryCode: '1010100',
    categoryOrder: '4',
  },
  {
    categoryCode: '1010102',
    categoryLevel: '3',
    categoryName: '수학 과외',
    parentCategoryCode: '1010100',
    categoryOrder: '5',
  },
  {
    categoryCode: '1010103',
    categoryLevel: '3',
    categoryName: '국어 과외',
    parentCategoryCode: '1010100',
    categoryOrder: '6',
  },
  {
    categoryCode: '1010104',
    categoryLevel: '3',
    categoryName: '과학 과외',
    parentCategoryCode: '1010100',
    categoryOrder: '7',
  },
  {
    categoryCode: '1010105',
    categoryLevel: '3',
    categoryName: '사회 과외',
    parentCategoryCode: '1010100',
    categoryOrder: '8',
  },
  {
    categoryCode: '1010200',
    categoryLevel: '2',
    categoryName: '외국어',
    parentCategoryCode: '1010000',
    categoryOrder: '9',
  },
  {
    categoryCode: '1010201',
    categoryLevel: '3',
    categoryName: '영어과외',
    parentCategoryCode: '1010200',
    categoryOrder: '10',
  },
  {
    categoryCode: '1010202',
    categoryLevel: '3',
    categoryName: '비즈니스 영어',
    parentCategoryCode: '1010200',
    categoryOrder: '11',
  },
  {
    categoryCode: '1010203',
    categoryLevel: '3',
    categoryName: '화상영어/전화영어 회화',
    parentCategoryCode: '1010200',
    categoryOrder: '12',
  },
  {
    categoryCode: '1010204',
    categoryLevel: '3',
    categoryName: '중국어 과외',
    parentCategoryCode: '1010200',
    categoryOrder: '13',
  },
  {
    categoryCode: '1010205',
    categoryLevel: '3',
    categoryName: '비즈니스 중국어',
    parentCategoryCode: '1010200',
    categoryOrder: '14',
  },
  {
    categoryCode: '1010206',
    categoryLevel: '3',
    categoryName: '일본어(일어) 과외',
    parentCategoryCode: '1010200',
    categoryOrder: '15',
  },
  {
    categoryCode: '1010207',
    categoryLevel: '3',
    categoryName: '비즈니스 일본어',
    parentCategoryCode: '1010200',
    categoryOrder: '16',
  },
  {
    categoryCode: '1010300',
    categoryLevel: '2',
    categoryName: '외국어시험',
    parentCategoryCode: '1010000',
    categoryOrder: '17',
  },
  {
    categoryCode: '1010301',
    categoryLevel: '3',
    categoryName: 'TOEIC',
    parentCategoryCode: '1010300',
    categoryOrder: '18',
  },
  {
    categoryCode: '1010302',
    categoryLevel: '3',
    categoryName: 'OPIc',
    parentCategoryCode: '1010300',
    categoryOrder: '19',
  },
  {
    categoryCode: '1010303',
    categoryLevel: '3',
    categoryName: 'IELTS',
    parentCategoryCode: '1010300',
    categoryOrder: '20',
  },
  {
    categoryCode: '1010304',
    categoryLevel: '3',
    categoryName: 'TOEFL ',
    parentCategoryCode: '1010300',
    categoryOrder: '21',
  },
  {
    categoryCode: '1010305',
    categoryLevel: '3',
    categoryName: 'HSK',
    parentCategoryCode: '1010300',
    categoryOrder: '22',
  },
  {
    categoryCode: '1010306',
    categoryLevel: '3',
    categoryName: 'JLPT',
    parentCategoryCode: '1010300',
    categoryOrder: '23',
  },
  {
    categoryCode: '1010307',
    categoryLevel: '3',
    categoryName: 'ACT',
    parentCategoryCode: '1010300',
    categoryOrder: '24',
  },
  {
    categoryCode: '1010308',
    categoryLevel: '3',
    categoryName: 'AP 과외',
    parentCategoryCode: '1010300',
    categoryOrder: '25',
  },
  {
    categoryCode: '1010400',
    categoryLevel: '2',
    categoryName: '공예',
    parentCategoryCode: '1010000',
    categoryOrder: '26',
  },
  {
    categoryCode: '1010401',
    categoryLevel: '3',
    categoryName: '플라워/꽃꽂이 레슨',
    parentCategoryCode: '1010400',
    categoryOrder: '27',
  },
  {
    categoryCode: '1010402',
    categoryLevel: '3',
    categoryName: 'LED 플라워 레슨',
    parentCategoryCode: '1010400',
    categoryOrder: '28',
  },
  {
    categoryCode: '1010403',
    categoryLevel: '3',
    categoryName: '네온공예 레슨',
    parentCategoryCode: '1010400',
    categoryOrder: '29',
  },
  {
    categoryCode: '1010404',
    categoryLevel: '3',
    categoryName: '가구/목공예 레슨',
    parentCategoryCode: '1010400',
    categoryOrder: '30',
  },
  {
    categoryCode: '1010405',
    categoryLevel: '3',
    categoryName: '뜨개질/위빙 레슨',
    parentCategoryCode: '1010400',
    categoryOrder: '31',
  },
  {
    categoryCode: '1010500',
    categoryLevel: '2',
    categoryName: '미술',
    parentCategoryCode: '1010000',
    categoryOrder: '32',
  },
  {
    categoryCode: '1010501',
    categoryLevel: '3',
    categoryName: '미술 회화 레슨',
    parentCategoryCode: '1010500',
    categoryOrder: '33',
  },
  {
    categoryCode: '1010502',
    categoryLevel: '3',
    categoryName: '소묘/드로잉 레슨',
    parentCategoryCode: '1010500',
    categoryOrder: '34',
  },
  {
    categoryCode: '1010503',
    categoryLevel: '3',
    categoryName: '서예 레슨',
    parentCategoryCode: '1010500',
    categoryOrder: '35',
  },
  {
    categoryCode: '1020000',
    categoryLevel: '1',
    categoryName: '홈/리빙',
    parentCategoryCode: '1000000',
    categoryOrder: '36',
  },
  {
    categoryCode: '1020100',
    categoryLevel: '2',
    categoryName: '이사',
    parentCategoryCode: '1020000',
    categoryOrder: '37',
  },
  {
    categoryCode: '1020101',
    categoryLevel: '3',
    categoryName: '원룸/소형 이사',
    parentCategoryCode: '1020100',
    categoryOrder: '38',
  },
  {
    categoryCode: '1020102',
    categoryLevel: '3',
    categoryName: '용달/화물 운송',
    parentCategoryCode: '1020100',
    categoryOrder: '39',
  },
  {
    categoryCode: '1020103',
    categoryLevel: '3',
    categoryName: '국내 이사',
    parentCategoryCode: '1020100',
    categoryOrder: '40',
  },
  {
    categoryCode: '1020104',
    categoryLevel: '3',
    categoryName: '가정이사 (투룸 이상)',
    parentCategoryCode: '1020100',
    categoryOrder: '41',
  },
  {
    categoryCode: '1020105',
    categoryLevel: '3',
    categoryName: '사무실/상업공간 이사',
    parentCategoryCode: '1020100',
    categoryOrder: '42',
  },
  {
    categoryCode: '1020106',
    categoryLevel: '3',
    categoryName: '짐 보관',
    parentCategoryCode: '1020100',
    categoryOrder: '43',
  },
  {
    categoryCode: '1020200',
    categoryLevel: '2',
    categoryName: '청소 업체',
    parentCategoryCode: '1020000',
    categoryOrder: '44',
  },
  {
    categoryCode: '1020201',
    categoryLevel: '3',
    categoryName: '이사/입주 청소 업체',
    parentCategoryCode: '1020200',
    categoryOrder: '45',
  },
  {
    categoryCode: '1020202',
    categoryLevel: '3',
    categoryName: '에어컨 청소',
    parentCategoryCode: '1020200',
    categoryOrder: '46',
  },
  {
    categoryCode: '1020203',
    categoryLevel: '3',
    categoryName: '세탁기 청소',
    parentCategoryCode: '1020200',
    categoryOrder: '47',
  },
  {
    categoryCode: '1020204',
    categoryLevel: '3',
    categoryName: '침대/매트리스 청소',
    parentCategoryCode: '1020200',
    categoryOrder: '48',
  },
  {
    categoryCode: '1020300',
    categoryLevel: '2',
    categoryName: '인테리어',
    parentCategoryCode: '1020000',
    categoryOrder: '49',
  },
  {
    categoryCode: '1020301',
    categoryLevel: '3',
    categoryName: '집 인테리어',
    parentCategoryCode: '1020300',
    categoryOrder: '50',
  },
  {
    categoryCode: '1020302',
    categoryLevel: '3',
    categoryName: '상업공간 인테리어',
    parentCategoryCode: '1020300',
    categoryOrder: '51',
  },
  {
    categoryCode: '1020303',
    categoryLevel: '3',
    categoryName: '욕실/화장실 리모델링',
    parentCategoryCode: '1020300',
    categoryOrder: '52',
  },
  {
    categoryCode: '1020304',
    categoryLevel: '3',
    categoryName: '홈 스타일링',
    parentCategoryCode: '1020300',
    categoryOrder: '53',
  },
  {
    categoryCode: '1020400',
    categoryLevel: '2',
    categoryName: '펫/반려동물',
    parentCategoryCode: '1020000',
    categoryOrder: '54',
  },
  {
    categoryCode: '1020401',
    categoryLevel: '3',
    categoryName: '반려동물 훈련',
    parentCategoryCode: '1020400',
    categoryOrder: '55',
  },
  {
    categoryCode: '1020402',
    categoryLevel: '3',
    categoryName: '반려견 산책',
    parentCategoryCode: '1020400',
    categoryOrder: '56',
  },
  {
    categoryCode: '1020403',
    categoryLevel: '3',
    categoryName: '펫 호텔',
    parentCategoryCode: '1020400',
    categoryOrder: '57',
  },
  {
    categoryCode: '1020404',
    categoryLevel: '3',
    categoryName: '펫 미용',
    parentCategoryCode: '1020400',
    categoryOrder: '58',
  },
  {
    categoryCode: '1030000',
    categoryLevel: '1',
    categoryName: '이벤트',
    parentCategoryCode: '1000000',
    categoryOrder: '59',
  },
  {
    categoryCode: '1030100',
    categoryLevel: '2',
    categoryName: '웨딩',
    parentCategoryCode: '1030000',
    categoryOrder: '60',
  },
  {
    categoryCode: '1030101',
    categoryLevel: '3',
    categoryName: '웨딩 영상 촬영',
    parentCategoryCode: '1030100',
    categoryOrder: '61',
  },
  {
    categoryCode: '1030102',
    categoryLevel: '3',
    categoryName: '웨딩 사진 촬영',
    parentCategoryCode: '1030100',
    categoryOrder: '62',
  },
  {
    categoryCode: '1030103',
    categoryLevel: '3',
    categoryName: '웨딩 헤어/메이크업',
    parentCategoryCode: '1030100',
    categoryOrder: '63',
  },
  {
    categoryCode: '1030104',
    categoryLevel: '3',
    categoryName: '웨딩 연주',
    parentCategoryCode: '1030100',
    categoryOrder: '64',
  },
  {
    categoryCode: '1030105',
    categoryLevel: '3',
    categoryName: '축가 요청',
    parentCategoryCode: '1030100',
    categoryOrder: '65',
  },
  {
    categoryCode: '1030106',
    categoryLevel: '3',
    categoryName: '결혼식 사회자',
    parentCategoryCode: '1030100',
    categoryOrder: '66',
  },
  {
    categoryCode: '1030200',
    categoryLevel: '2',
    categoryName: '뷰티/미용',
    parentCategoryCode: '1030000',
    categoryOrder: '67',
  },
  {
    categoryCode: '1030201',
    categoryLevel: '3',
    categoryName: '헤어(컷/염색/펌)',
    parentCategoryCode: '1030200',
    categoryOrder: '68',
  },
  {
    categoryCode: '1030202',
    categoryLevel: '3',
    categoryName: '헤어/메이크업',
    parentCategoryCode: '1030200',
    categoryOrder: '69',
  },
  {
    categoryCode: '1030203',
    categoryLevel: '3',
    categoryName: '네일',
    parentCategoryCode: '1030200',
    categoryOrder: '70',
  },
  {
    categoryCode: '1030204',
    categoryLevel: '3',
    categoryName: '왁싱',
    parentCategoryCode: '1030200',
    categoryOrder: '71',
  },
  {
    categoryCode: '1030205',
    categoryLevel: '3',
    categoryName: '속눈썹 연장/파마',
    parentCategoryCode: '1030200',
    categoryOrder: '72',
  },
  {
    categoryCode: '1030206',
    categoryLevel: '3',
    categoryName: '피부 관리',
    parentCategoryCode: '1030200',
    categoryOrder: '73',
  },
  {
    categoryCode: '1040000',
    categoryLevel: '1',
    categoryName: '비즈니스',
    parentCategoryCode: '1000000',
    categoryOrder: '74',
  },
  {
    categoryCode: '1040100',
    categoryLevel: '2',
    categoryName: '번역',
    parentCategoryCode: '1040000',
    categoryOrder: '75',
  },
  {
    categoryCode: '1040101',
    categoryLevel: '3',
    categoryName: '한문 번역',
    parentCategoryCode: '1040100',
    categoryOrder: '76',
  },
  {
    categoryCode: '1040102',
    categoryLevel: '3',
    categoryName: '영어 번역',
    parentCategoryCode: '1040100',
    categoryOrder: '77',
  },
  {
    categoryCode: '1040103',
    categoryLevel: '3',
    categoryName: '중국어 번역',
    parentCategoryCode: '1040100',
    categoryOrder: '78',
  },
  {
    categoryCode: '1040104',
    categoryLevel: '3',
    categoryName: '일본어 번역',
    parentCategoryCode: '1040100',
    categoryOrder: '79',
  },
  {
    categoryCode: '1040105',
    categoryLevel: '3',
    categoryName: '베트남어 번역',
    parentCategoryCode: '1040100',
    categoryOrder: '80',
  },
  {
    categoryCode: '1040106',
    categoryLevel: '3',
    categoryName: '독일어 번역',
    parentCategoryCode: '1040100',
    categoryOrder: '81',
  },
  {
    categoryCode: '1040200',
    categoryLevel: '2',
    categoryName: '통역',
    parentCategoryCode: '1040000',
    categoryOrder: '82',
  },
  {
    categoryCode: '1040201',
    categoryLevel: '3',
    categoryName: '영어 통역',
    parentCategoryCode: '1040200',
    categoryOrder: '83',
  },
  {
    categoryCode: '1040202',
    categoryLevel: '3',
    categoryName: '중국어 통역',
    parentCategoryCode: '1040200',
    categoryOrder: '84',
  },
  {
    categoryCode: '1040203',
    categoryLevel: '3',
    categoryName: '일본어 통역',
    parentCategoryCode: '1040200',
    categoryOrder: '85',
  },
  {
    categoryCode: '1040204',
    categoryLevel: '3',
    categoryName: '러시아어 통역',
    parentCategoryCode: '1040200',
    categoryOrder: '86',
  },
  {
    categoryCode: '1040205',
    categoryLevel: '3',
    categoryName: '독일어 통역',
    parentCategoryCode: '1040200',
    categoryOrder: '87',
  },
  {
    categoryCode: '1040300',
    categoryLevel: '2',
    categoryName: '인사',
    parentCategoryCode: '1040000',
    categoryOrder: '88',
  },
  {
    categoryCode: '1040301',
    categoryLevel: '3',
    categoryName: '기업교육',
    parentCategoryCode: '1040300',
    categoryOrder: '89',
  },
  {
    categoryCode: '1040302',
    categoryLevel: '3',
    categoryName: '인권/성교육',
    parentCategoryCode: '1040300',
    categoryOrder: '90',
  },
  {
    categoryCode: '1040303',
    categoryLevel: '3',
    categoryName: '리쿠르팅',
    parentCategoryCode: '1040300',
    categoryOrder: '91',
  },
  {
    categoryCode: '1050000',
    categoryLevel: '1',
    categoryName: '디자인/개발',
    parentCategoryCode: '1000000',
    categoryOrder: '92',
  },
  {
    categoryCode: '1050100',
    categoryLevel: '2',
    categoryName: '디자인 외주',
    parentCategoryCode: '1050000',
    categoryOrder: '93',
  },
  {
    categoryCode: '1050101',
    categoryLevel: '3',
    categoryName: '인쇄물 디자인',
    parentCategoryCode: '1050100',
    categoryOrder: '94',
  },
  {
    categoryCode: '1050102',
    categoryLevel: '3',
    categoryName: '명함 디자인',
    parentCategoryCode: '1050100',
    categoryOrder: '95',
  },
  {
    categoryCode: '1050103',
    categoryLevel: '3',
    categoryName: '로고 디자인',
    parentCategoryCode: '1050100',
    categoryOrder: '96',
  },
  {
    categoryCode: '1050104',
    categoryLevel: '3',
    categoryName: '간판 디자인',
    parentCategoryCode: '1050100',
    categoryOrder: '97',
  },
  {
    categoryCode: '1050105',
    categoryLevel: '3',
    categoryName: '프레젠테이션 디자인',
    parentCategoryCode: '1050100',
    categoryOrder: '98',
  },
  {
    categoryCode: '1050106',
    categoryLevel: '3',
    categoryName: '일러스트 디자인',
    parentCategoryCode: '1050100',
    categoryOrder: '99',
  },
  {
    categoryCode: '1050200',
    categoryLevel: '2',
    categoryName: '개발 외주',
    parentCategoryCode: '1050000',
    categoryOrder: '100',
  },
  {
    categoryCode: '1050201',
    categoryLevel: '3',
    categoryName: '게임 개발',
    parentCategoryCode: '1050200',
    categoryOrder: '101',
  },
  {
    categoryCode: '1050202',
    categoryLevel: '3',
    categoryName: 'IOS 개발',
    parentCategoryCode: '1050200',
    categoryOrder: '102',
  },
  {
    categoryCode: '1050203',
    categoryLevel: '3',
    categoryName: '안드로이드 개발',
    parentCategoryCode: '1050200',
    categoryOrder: '103',
  },
  {
    categoryCode: '1050204',
    categoryLevel: '3',
    categoryName: '웹 개발',
    parentCategoryCode: '1050200',
    categoryOrder: '104',
  },
  {
    categoryCode: '1050205',
    categoryLevel: '3',
    categoryName: '퍼블리싱',
    parentCategoryCode: '1050200',
    categoryOrder: '105',
  },
  {
    categoryCode: '1050206',
    categoryLevel: '3',
    categoryName: '소프트웨어 개발',
    parentCategoryCode: '1050200',
    categoryOrder: '106',
  },
  {
    categoryCode: '1050207',
    categoryLevel: '3',
    categoryName: '워드프레스 개발',
    parentCategoryCode: '1050200',
    categoryOrder: '107',
  },
];

generateCategoryData = async () => {
  try {
    var item = {};

    for (let i = 0; i < categoryList.length; i++) {
      item = {};
      var qu =
        'insert into tb_service_category(' +
        'category_code, category_level, category_name, parent_category_code, category_order, use_yn, ' +
        'register_id, register_date, update_id, update_date) ' +
        'values(' +
        "'" +
        String(categoryList[i]['categoryCode']).replace('"', '') +
        "', " +
        "'" +
        String(categoryList[i]['categoryLevel']) +
        "', " +
        "'" +
        String(categoryList[i]['categoryName']) +
        "', " +
        "'" +
        String(categoryList[i]['parentCategoryCode']) +
        "', " +
        "'" +
        String(categoryList[i]['categoryOrder']) +
        "', " +
        "'1', " +
        "'Jason', " +
        'current_timestamp, ' +
        "'Jason', " +
        'current_timestamp' +
        ')';

      console.log('qu', qu);

      var result = await pg.getconnection().query(qu);

      console.log('fake data inserting to database...');
      console.log('result', result);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  generateFakeData,
  generateCategoryData,
  generateMasterFakeData,
};
