window.onload = function(){
  
  var att = {
    manifest : {
      length : 2,
      0 : "AWC334455",
      1 : "AWC312265"
    },
    jobs : {
      "AWC334455" : ['160x600', '300x250', '300x600'],
      "AWC312265" : ['160x600', '300x250', '300x600', '728x90']
    }
  }
  
  
  processATTjobs();
  function processATTjobs(){
    var jobs = document.getElementsByClassName('jobs-att')[0];
    for(var i = 0; i < att.manifest.length; i++){
      var _jobname = document.createElement('div');
      var jobname = document.createElement('div');
      _jobname.appendChild(jobname);
      jobname.innerHTML = att.manifest[i];
      jobname.className = 'job-name';
      jobs.appendChild(_jobname);
      jobname.num = i;
      jobname.addEventListener('click', displayATTSizes);
      //appending banner sizes 
      for(var o = 0, sizes = att.jobs[att.manifest[i]]; o < sizes.length; o++){
        var div = document.createElement('div');
        div.innerHTML = sizes[o];
        div.className = 'att-banner-size-'+jobname.num;
        div.classList.add('none');
        _jobname.appendChild(div);
        div.addEventListener('click', loadBanner);
      }
    }
  }
  
  function displayATTSizes(e){
    //alert(e.target.num);
    var elems = document.getElementsByClassName('att-banner-size-'+e.target.num);
    for(var i = 0; i < elems.length; i++){
      if(elems[i].classList.contains('none')){
        elems[i].classList.remove('none');
      }else{
        elems[i].classList.add('none');
      }
    }
  }
  
  function loadBanner(e){
    //alert(e.target.innerHTML);
    alert('loading '+e.target.innerHTML+' banner...');
  }
  
  //alert(att.jobs[att.manifest[0]]);
  
}