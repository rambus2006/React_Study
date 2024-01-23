### { 동기 & 비동기 }

동기, 비동기(synchronized)
- 동기와 비동기는 다르다( 두개의 흐름이 별개로 있다.)
- 비동기 안에서도 동기의 흐름이 잇다.
- 비동기는 비동기만의 흐름을 가지고 있다.

- 동기를 비동기로, 비동기를 동기로 바꿔야 합류가 된다.

> 동기 비동기를 나누는 이유: 사용자의 편의를 높이기 위해서 데이터만 나중에 불러오는 방식으로 하기 때문

---

<aside>
👉 동기와 비동기, 두개의 길이 있으면
동기는 시장 가게들만 있는 길, 이 안에 있는 사람들은 데이터라고 쳤을 때
일단 가게들이 있어야 사람들이 장사를 할 수 있으니
가게들이 쭈루룩 늘어선 것을 동기의 흐름, 비동기의 길에 사람들이 다니는 것을 비동기의 흐름이라고 한다.
그리고 비동기의 사람들이 동기의 흐름으로 오기 위해서는 별도의 과정이 필요하다.
비동기의 사람들이 상인이 되어야 시장에서 장사를 할 수 있고, 상인이 시장을 벗어나 평범한 길로 다니면 일반인이 되듯이 이것을
동기를 비동기로, 비동기를 동기로 바꿔야 합류가 된다는 문장의 의미이다.

</aside>

### [ JS에서의 비동기 프로그래밍 ]

### { 콜백과 비동기 프로그래밍 }

- 자바스크립트에서 가장 기본적인 비동기 프로그래밍은 콜백을 통해 이뤄짐
- 콜백함수란?
    
    > 개념
    > 
    - 콜백함수란? 다른함수에 전달하는 함수, 콜백을 전달받은 함수는 어떤 조건을 만족하거나 어떤 (비동기) 이벤트가 일어나면 여러분이 제공한 함수를 호출(콜백) 한다. 전달한 콜백함수를 호출할 떄는 조건이나 이벤트에 대한 정보를 제공하며 때때로 함수 인자를 통해 세부사항을 추가로 제공하기도 한다.
    - 매개변수로 함수 객체를 전달해서 호출 함수 내에서 매개변수 함수를 실행하는 것
    - 파라미터로 일반적인 변수나 값을 전달하는 것이 아닌 함수 자체를 전달하는 것
    
    > 사용원칙
    > 
    1. 익명함수 사용
    - 보통 일회용으로 사용하는 경우가 많고, 코드의 간결성을 위해 이름이 없는 ‘익명함수’를 사용한다.
    - 또한 함수 이름의 충돌 방지를 위해 익명함수를 쓴다.
    
    ```jsx
    sayHello("인파", function (name) { // 함수의 이름이 없는 익명 함수
    	console.log(name); 
    });
    ```
    
    1. 화살표 함수 모양의 콜백 
        - 익명함수보다 조금 더 간결하게 쓰기 위해 화살표 함수를 사용한다.
    
    ```jsx
    function sayHello(callback) {
      var name = "Alice";
      callback(name); // 콜백 함수 호출
    }
    
    // 익명 화살표 콜백 함수
    sayHello((name) => {
      console.log("Hello, " + name);
    }); // Hello, Alice
    ```
    
    1. 함수의 이름을 넘기기
        - 자바스크립트는 null과 undefined 타입을 제외하고 모든것을 객체로 다룬다(일급객체) 따라서 매개변수에 일반적인 변수나 상수값 뿐만 아니라 함수 자체를 객체로서 전달이 가능한 것이다. 만일 콜백 함수가 여러호출 함수에 사용될 경우 별도로 함수를 정의하고 함수의 이름만 호출 함수의 인자에 전달하는 식으로 사용이 가능하다.
        
        ```jsx
        // 콜백 함수를 별도의 함수로 정의
        function greet(name) {
          console.log("Hello, " + name);
        }
        
        function sayHello(callback) {
          var name = "Alice";
          callback(name); // 콜백 함수 호출
        }
        
        function sayHello2(callback) {
          var name = "Inpa";
          callback(name); // 콜백 함수 호출
        }
        
        // 콜백 함수의 이름만 인자로 전달
        sayHello(greet); // Hello, Alice
        sayHello2(greet); // Hello, Inpa
        ```
        
        ```jsx
        function introduce (lastName, firstName, callback) {
            var fullName = lastName + firstName;
            
            callback(fullName);
        }
        
        function say_hello (name) {
            console.log("안녕하세요 제 이름은 " + name + "입니다");
        }
        
        function say_bye (name) {
            console.log("지금까지 " + name + "이었습니다. 안녕히계세요");
        }
        
        introduce("홍", "길동", say_hello);
        // 결과 -> 안녕하세요 제 이름은 홍길동입니다
        
        introduce("홍", "길동", say_bye);
        // 결과 -> 지금까지 홍길동이었습니다. 안녕히계세요
        ```
        

### { 콜백 기반 비동기 프로그래밍의 다양한 유형 }

### 1. 타이머

- setTimeout이나 setInterval과 같은 타이머 함수에서 일정 시간마다 스크립트를 실행하는 용도로서 콜백 함수를 이용한다.

> setTimeout()
> 
- setTimeout()의 첫번째 인자는 함수이고, 두번째 인자는 밀리초로 지정한 시간이다.
    
    ```jsx
    	setTimeout(checkForUpdates,60000); //checkForUpdates가 함수, 60000는 밀리초로 1분 
    ```
    

> setInterval()
> 
- setTimeout() 은 인자는 전달하지 않고 지정된 콜백함수를 한 번 호출하고서, 그 함수에 대해 잊어버린다.업데이트를 지속적으로 체크하는 함수가 필요하다면 반복적으로 실행해야 하는데, 이때는 setInterval()함수를 사용한다.

```jsx
let updateIntervalId = setInterval(checkForUpdates,60000);
```

- setInterval을 멈추는 방법
    - setInterval()이 반환하는 값을 clearInterval()에 넘겨 반복호출을 중단할 수 있다.
    
    ```jsx
    function stopCheckForUpdates(){
    		clearInterval(updateIntervalId);
    }
    ```
    

### 2. 이벤트

> 이벤트 함수
> 
- 
- addEventListener는 특정 이벤트가 발생했을 때 콜백 함수를 실행하는 메서드이다. 클릭과 같은 이벤트를 처리하기 위해 등록하는 이벤트 리스너로 콜백함수가 쓰인다. 버튼을 클릭하면 그에 연관되는 스크립트 실행을 콜백 함수로 등록하는 형태인 것이다.
- 

### 3. 네트워크 이벤트

- 네트워크 요청 역시 자바 스크립트 프로그래밍의 대표적인 비동기 유형 중 하나이다.
- 브라우저에서 실행되는 자바스크립트는 다음과 같은 코드로 웹 서버에서 데이터를 가져올 수 있다.

```jsx
function getCurentVersionNumber(versionCallback){
		//백엔드의 버전 API에 HTTP 요청을 보낸다. 
		let request = new XMLHttpRequest();
    request.open("GET","http://www.example.com/api/version");
		request.send();
		
		//응답을 받았을 때 호출할 콜백을 등록합니다. 
		request.onload = function(){
			if(request.status === 200){
					//HTTP 상태가 OK 면 버전 번호를 가져와서 콜백을 호출합니다. 
					let currentVersion = parseFloat(request.responseText);
					versionCallback(null,currentVersion);
     } else { 
				 //그렇지 않다면 콜백에 에러를 보고합니다. 
				 versionCallback(response.statusText,null);
		 }
   };
   //네트워크 에러가 생겼을 때 호출할 다른 콜백을 등록합니다. 
	 request.onerror = request.ontimeout = function(e){
				versionCallback(e.type,null);
	 }

```

### 4.노드의 콜백과 이벤트

- 서버 사이드 자바스크립트 환경인 노드는 비동기적으로 만들어져 있으며 많은 API 가 콜백과 이벤트를 사용한다.
- 예를 들어 파일 콘텐츠를 읽는 기본 API 도 비동기적이며 파일 콘텐츠를 읽으면 콜백함수를 호출한다.

```jsx
const fs = require("fs"); //fs모듈은 파일 시스템 관련 API입니다. 
let options = { //프로그램에서 사용할 옵션 객체 
	//여기에 기본 옵션을 작성합니다. 
};
//설정 파일을 읽고 콜백함수를 호출합니다. 
fs.readFile("config.json","utf-8",(err,text) => { //fs.readFile()함수는 매개변수를 두개 받는 콜백을 마지막 인자로 받는다. 지정딘 파일을 비동기적으로 읽고 콜백을 호출한다. 
	if(err){
			//에러가 있으면 경고를 표시하고 계속 진행합니다. 
			console.warn("Could not read config file:",err);
	}else{
		//에러가 없으면 파일 콘텐츠를 분석하고 옵션객체에 할당합니다. 
			Object.assign(options,JSON.parse(text)); 
	}
	//어느쪽이든 이제 프로그램을 실행할 수 있음
	startProgram(options);
	
});
```

---

| 출시된 기간 | ES6  | ES2017 | ES2018 |
| --- | --- | --- | --- |
| 대표 키원드 | Promise(프라미스) | async ,await | 비동기 이터레이터 .for/await |
| 키워드로 인한 효과 | 비동기 동작의 아직 사용할 수 없는 결과를 나타내는 객체  | promise  기반 코드를 마치 동기적인 코드 처럼 작성할 수 있게 해서 비동기 프로그래밍을 단순화하는 새 문법을 제공한다.  | 동기적인 것처럼 보이는 단순한 루프에서 비동기 이벤트 스트림을 다룰 수 있음 |