# LotteCard Loca2.0 Vue Boilerplate 가이드
## Getting Started
### Dependencies
*__Note:__ nodejs 14버전에서만 정상 동작하기 때문에 사전에 설치 부탁드립니다.

- [Node.js](https://nodejs.org/) (V14 LTS)
- [Yarn](https://classic.yarnpkg.com/en/)

### Libraries

- [Typescript@4.1.x](https://www.typescriptlang.org/)
- [Vue.js@v2](https://vuejs.org/)
- [vuex@v3](https://vuex.vuejs.org/)
- [Vue Class Component](https://class-component.vuejs.org/)
- [Vue Property Decorator](https://github.com/kaorun343/vue-property-decorator)
- [Vuex Module Decorators](https://github.com/championswimmer/vuex-module-decorators)

### Concept
- Typescript 도입을 통해 코드 안정성 및 생상성 증대
- 엄격한 타입 Rule 도입으로 안정성 확보
    - strictNullChecks
    - noImplicitAny
- Typescript 주요 Feature 적극 사용 권장
    - Optional Chaining
    - Nullish Coalescing
    - Non Null Assertion Operator
    - Promise.all
    - ...
- 클래스 기반 컴포넌트 (Vue Class Component) 를 활용해 Typescript의 많은 기능을 적극 도입
- Typescript Decorator Pattern 을 통해 읽기 쉬운 코드를 작성하고 코드의 재사용성을 높임
- async & await 적극적인 사용으로 읽기 쉬운 코드와 기존의 비동기 처리방식 개선
- Husky 도입을 통해 즉시 배포가 가능한 코드 유지

### Installation

##### Clone this repo:
```sh
git clone https://github.com/LOTTECARD/vue.ts-boilerplate.git
cd vue.ts-boilerplate
```

##### Install the dependencies:
```sh
npm install
```

##### Development:
```sh
npm run serve
```

### Project Structure

    .
    ├── .vscode                 # 프로젝트 내에서 사용되는 vscode 설정
    ├── cli                     # build 관련 ts 파일(ex. *.ts, *.vue 파일 유효성 검토)
    ├── server                  # json-server api mock
    ├── src                     # src root
    │   ├── assets              # image, fonts 등 resource 파일
    │   ├── components          # 앱 내에서 재사용을 위한 컴포넌트
    │   ├── pages               # Vue Router와 연결될 실제 Page component
    │   ├── services            # Server API Module Layer
    │   ├── stores              # Vuex Store (Module 단위 개발)
    │   │   ├── modules         # Vuex Modules
    │   │   └── ...
    │   ├── styles              # Global Sass (ex. reset, mixin, variable)
    │   ├── utils               # Utility Modules
    │   │   ├── decorator       # Vue에서 사용되는 Util
    │   │   └── ...
    │   └── ...                 # etc.
    └── ...
