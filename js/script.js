const content = [eula, pulse, activation];

let pageload = (index) => {
  let page = index
  $('.new-content').html(content[page])
  $('.accept')  .click(()=>{ page += 1; pageload(page);})
  $('.previous').click(()=>{ page -= 1; pageload(page);})
  $('.expand').click(()=>{
    $('.new-content hr').before(pulsehd);
    $('.disable-pulse').hide();
    $('.accept').show();
    $('.expand').hide();
  })
  switch (page) {
    case 0:
      $(`aside h3`).removeClass();
      $(`aside h3:eq(1)`).addClass('inactive');
      $(`aside h3:eq(2)`).addClass('inactive');
      break;
    case 1:
      $(`aside h3`).removeClass();
      $(`aside h3:eq(0)`).addClass('completed');
      $(`aside h3:eq(0)`).addClass('completed');
      $(`aside h3:eq(2)`).addClass('inactive');
      break;
    case 2:
      $(`aside h3`).removeClass();
      $(`aside h3:eq(0)`).addClass('completed');
      $(`aside h3:eq(1)`).addClass('completed');
      $('.nxt-sub-step').click(()=>{
        $('.two-col-center:eq(1)').removeClass('inactive');
      });
      $('.nxt-sub-step:eq(1)').click(()=>{
        $('.two-col-center:eq(2)').removeClass('inactive');
      });
      $('#file').change(()=>{
        $('#file').val().length > 0 ? $('.primary').removeClass('inactive') : null;
        //heres some comment
      });
      break;
    default:null

  }
}

$(document).ready(function() {
  const index = 2
  pageload(index)
});
