import _ from 'lodash';

export default function solution(content){
  // BEGIN

  //step1--begin
  const format = content.trim().split('\n').slice(1);
  const result1 = format.map((n) => n.slice(0, -1).split(','));
  console.log(`количество партий: ${result1.length}`);
  //end

  //step2--begin
  const ratedGames = result1.filter((el) => el[1] === 'TRUE');
  const notRatedGames= result1.filter((el) => el[1] === 'FALSE');
  const calcRated = Math.round((ratedGames.length/result1.length) * 100);
  const calcNotRated = Math.round((notRatedGames.length/result1.length) * 100);
  console.log(`Соотношение рейтинговых игр к нерейтинговым получится как: ${calcRated} : ${calcNotRated}`);
  //end

  //step3--begin
  const countGames = result1.map((el) => el[13]);
  const result3 = _.uniq(countGames);
  console.log(`все варианты дебютов:${result3}`)
  //end

  //step4--begin
  //end


  //step5--begin
  const findStatus1 = result1.filter((el) => el[3] === 'Draw'); 
  const findStatus2 = result1.filter((el) => el[3] === 'Out of Time');
  const findStatus3 = result1.filter((el) => el[3] === 'Mate');

  const calcStatGame1 = Math.round((findStatus1.length/result1.length) * 100);
  const calcStatGame2 = Math.round((findStatus2.length/result1.length) * 100);
  const calcStatGame3 = Math.round((findStatus3.length/result1.length) * 100);
  console.log(`Соотношение между ничьей и кол-вом игр: ${calcStatGame1}`);
  console.log(`Соотношение между выходом из игры и кол-вом игр: ${calcStatGame2}`)
  console.log(`Соотношение между матом и кол-вом игр: ${calcStatGame3}`);
  //end
  // END
}