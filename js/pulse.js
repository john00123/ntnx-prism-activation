const pulse=
`
  <h2>Pulse Data</h2>
  <p style='white-space:pre-wrap'>Pulse continuously monitors cluster health and periodically sends machine data to Nutanix’s cloud based analytics engine. It automatically takes action when a problem has occurred or is about to occur.  <a href=’#’ class='link'>Learn More</a>

Nutanix strongly recommends not disabling this feature to improve your support experience in the event of a failure or critical system issue.

Warning: If you disable Pulse, Nutanix will not be able to proactively reach out to you in the event of failures, and your issue resolution time may increase significantly.

By enabling Pulse you elect and authorize Nutanix to electronically collect Pulse diagnostic data, including system alerts via e-mail, in accordance with terms and conditions set forth in EULA.</p>

  <h3 class='disable-pulse'><input type='checkbox' name='a' style='margin-right:10px;'> Disable Pulse (Not Recommended) </h3>

  <hr>

  <div class='two-col fw btns'>
    <button class='secondary previous' style='opacity:0;'>Previous</button>
    <button class='primary expand'> Continue</button> <button class='primary accept' style='display:none;'>  Accept</button>
  </div>
`;


const pulsehd =  `
<div class='hd'> <h3>Enhanced product support.</h3>

<p>Now Nutanix support can provide a quicker, more precise response in the event of an issue. This can be enable by sending additional support information via Pulse (such as entity names). Nutanix does not collect personally identifiable information. Learn more.

<div class='agreed'><input type='checkbox' style='margin-right:10px;'>Enable enhance Monitoring.</p></div>
</div>
`
