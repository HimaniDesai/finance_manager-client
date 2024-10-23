export const dateFormat = function(newDate) {
  let d = new Date(newDate)
  // return d.getDate() + '/'+(d.getMonth+1)+'/'+d.getFullYear()
  let date = d.toJSON().slice(0, 10);
    let nDate = date.slice(8, 10) + '/'
        + date.slice(5, 7) + '/'
        + date.slice(0, 4);
    return nDate

}
export const timeConvDetail = function (timestamp) {
    let elapsedTime = (Date.now() - timestamp) / 1000

    let time = {
          input: timestamp,
        seconds: elapsedTime ,
        minutes: '',
          hours: '',
           days: '',
         months: '',
          years: '',

        formatString: function(){
            let time = this.seconds;
            let word = ' second'
            if( this.minutes !== ''  ) { time = this.minutes; word = 'minute' }
            if( this.hours   !== ''  ) { time = this.hours;   word = ' hour'  }
            if( this.days    !== ''  ) { time = this.days;    word = ' day'   }
            if( this.months  !== ''  ) { time = this.months;  word = ' month' }
            if( this.years   !== ''  ) { time = this.years;   word = ' year'  }
            if( Math.floor(time) > 1 ) { word += 's'}
            return `${Math.abs(Math.floor(time))} ${word} ago`
        } 
    } 

    if( time.seconds > 60 ) time.minutes = time.seconds / 60;
    if( time.minutes > 60 ) time.hours   = time.minutes / 60;
    if( time.hours   > 24 ) time.days    = time.hours   / 24;
    if( time.days    > 30 ) time.months  = time.days    / 30; 
    if( time.months  > 12 ) time.years   = time.months  / 12;
    return time.formatString()
    // return {
    //     timeObject: time,
    //     formattedTime: time.formatString() 
    // }
}
  
export const getCommentCountText = (commentArr) => {
  const count = commentArr.length;
  return count === 1 ? '1 Comment' : `${count} Comments`;
};