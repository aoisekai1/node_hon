
<div class="container">
<h3>{{lang.btn.btnInsert}} {{lang.titlePage.posts}}</h3>
<div class="div-space"></div>
<div class="col-sm-12">
  <div class="col-sm-4">
    <div class="row">
      <div class="col-sm-3">
        <div class="row">
          <a href="/posts" class="btn btn-primary btn-sm btn-block">
            <i class="fas fa-list"></i>
            {{lang.btn.btnList}}
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="div-space"></div>
<hr>
<div class="row">
  <div class="page-header"></div>
  <div class="col-sm-12">
    <form id="form-input-post" method="post" action="">
      <div class="form-group">
        <div class="col-sm-12">
          <label>{{lang.form.code}}</label>
          <input type="text" class="form-control" name="code" value="" readonly>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <label>{{lang.form.title}}</label>
          <input type="text" class="form-control" name="title" value="">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <label>{{lang.form.desc}}</label>
          <input type="text" class="form-control" name="description" value="">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <label>{{lang.form.status}}</label>
          {{{ddStatus}}}
          {{!-- <select class="form-control" name="status"> --}}
            {{!-- <option value="unpublish">{{lang.form.unpublish}}</option>
            <option value="publish">{{lang.form.publish}}</option> --}}
          {{!-- </select> --}}
        </div>
      </div>
      <div class="col-sm-12">
        <button type="submit" class="btn btn-primary btn-sm">
          <i class="fas fa-save"></i>
          {{lang.btn.btnUpdate}}
        </button>
      </div>
    </form>
  </div>
</div>
</div>
