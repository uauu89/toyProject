# ToyProject | 기능테스트

구현해보고 싶은 기능을 구현해서 보관 / 또는 체크해봐야 할 이슈를 확인하기 위한 페이지  
현재 정확한 기획은 정하지 않음  
추후 페이지로 구성 예정

#### 24.01.09
1. > 1. project > **moveModal 작성**  
   >    + 프로젝트 요약 : 모달창을 움직이는 기능 구현
   >    
   > <br />
       
2. > 1. moveModal 수정 
   >    - 경우에 따라 닫기버튼에 텍스트 선택이 되는 이슈 발생  
   >        → user-select : none; 추가 (추측성 추가로 실제 해결됐는지는 아직 확인 안됨)
   > 2. issue > **rotateCheck 작성**
   >    + 프로젝트 요약 : 카드맞추기 게임 작업중 keyframes : rotate가 네이버 앱에서 작동하지 않아 확인해보기 위해 작성  
   >  
   >  <br />  
     
3. > 1. 메시지 수정 
   >    - moveModal.html 내용 추가(주석 추가)
   > 2. 경로 수정
   >    - issue 하위 개별폴더 추가
   > 3. moveModal 업데이트 예정
   >    + 모바일에서 작동 안함 → 모바일에서도 작동 가능한 지 연구 필요

#### 24.01.10
1. > 1. moveModal 수정 
   >    + css z-index 적용대상 변경
   >    + script marginX 계산방식을 e.pageX - modal.offsetLeft 에서 offsetX로 변경
   >    
   > <br />