const usage=`
  <h2>Usage Data</h2>
  <p>
    Pulse continiously monitors cluster and health periodically and sends data to Nutanix's cloud analytics engine. This information is anonymous and serves fro troubleshooting. Nutanix strongly recommends not to disable this featyre to improve your support experience in the evnet of a failure or critical system issue. If tyou sibale Pulse, Nutanix will not be able to proactively reach out to you in teh events of failures and the resolution time will increase significantly.
  </p>

  <h3><input type='radio' name='a' style='margin-right:10px;'> Don't share my data </h3>
  <h3><input type='radio' name='a' style='margin-right:10px;'> Share support data </h3>
  <h3><input type='radio' name='a' style='margin-right:10px;'> Share entity and support data (Enhance Cluster Monitoring)</h3>
  <hr>

  <div class='two-col fw btns'>
    <button class='secondary'>Previous</button>
    <button class='primary accept2'>  Accept</button>
  </div>
`;
const activation=`
  <h2>Product activation</h2>
  <p>
    In order to run this cluster you need to license it. This can be done by accesing this link and using this file to generate the license file. Upload the license file here.
  </p>
  <button class='secondary' style='margin-bottom:20px;'>Upload License File</button>
  <hr>

  <div class='two-col fw btns'>
    <button class='secondary'>Previous</button>
    <button class='primary accept2'>Finish</button>
  </div>
`;



$(document).ready(function() {

  $('.accept').click(()=>{
    $('.agreed, .signature, .eula').remove();
    $('.new-content').html(usage);
    $('aside h3:eq(0)').addClass('inactive');
    $('aside h3:eq(1)').removeClass('inactive');
    $('.accept2').unbind('click').bind('click',()=>{
      $('.new-content').html(activation);
    })
  })


});
