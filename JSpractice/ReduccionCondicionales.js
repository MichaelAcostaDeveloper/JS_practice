function getTypeSubscrition(subscription){
          if( subscription == 'Free'){
                    console.log('Just can take the free courses');
                    return;
          }

          if( subscription == 'Basic'){
                    console.log('Just can take all courses during one month');
                    return;
          }

          if( subscription == 'Expert'){
                    console.log('Just can take almost courses during one year');
                    return;
          }

          if( subscription == 'Expert Duo'){
                    console.log('Just can take all courses you and a partner');
                    return;
          }

          console.warn('This subscription does not exist!!!')
}

getTypeSubscrition('Expert')

//BONUS
const typesSubscrition = {
          free: 'Just can take the free courses' ,
          basic: 'Just can take all courses during one month',
          expert: 'Just can take almost courses during one year' ,
          expert_duo:'Just can take all courses you and a partner'
};

function getSubs(subs){
if(typesSubscrition[subs]){
          console.log(typesSubscrition[subs]);
          return;
}
console.warn('This subscription does not exist!!!')
}

getSubs('free')