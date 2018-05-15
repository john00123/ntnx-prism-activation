const activation=`
  <h2>Product activation</h2>
  <p>
    Cluster will be operable after applying Acropolis Licenses. </br>
    Follow the steps below to activate this cluster.
  </p>
  <div class='two-col-center fw'>
    <div>
      <h3> Step 1: Download cluster summary file </h3>
      <p>The cluster summary file has capacity information about this cluster that is required for licensing. </p>
    </div>
    <a href='./img/cluster.xml' download style='flex-shrink:0; margin-left:20px;'>
      <button class='secondary'> &nbsp; Download &nbsp;</button>
    </a>
  </div>
  <hr></br>

  <div class='two-col-center fw inactive'>
    <div>
      <h3> Step 2: Go to Nutanix support portal</h3>
      <p>Log in to the Nutanix support portal, click on Manage Licenses, and upload the cluster file that was downloaded in Step 1. </p>
    </div>
    <a href='https://john00123.github.io/ntnx-CCU-portal/overview.html'  target="_blank" style='flex-shrink:0; margin-left:20px;'>
      <button class='secondary'>Go to Portal</button>
    </a>
  </div>
  <hr></br>

  <div class='two-col-center fw inactive'>

    <div>
      <h3> Step 3: Upload license summary file </h3>
      <p>Upload the license summary file that was downoaded from Nutanix support portal.</p>
    </div>

    <a href='http://john00123.github.io/ntnx-CCU-portal/element.html' style='flex-shrink:0; margin-left:20px;'>
      <input type="file" id='file' style='display:none;'>
      <label for='file' class='secondary file-select' > Upload File</label>
    </a>
  </div>




`;
