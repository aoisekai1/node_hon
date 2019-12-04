<div class="container">
  <h3>{{ lang.titlePage.posts }}</h3>
  <div class="div-space"></div>
  <div class="col-sm-12">
    <div class="row">
      <div class="col-sm-4">
        <div class="row">
          <div class="col-sm-3">
            <div class="row">
              <a href="/posts" class="btn btn-primary btn-sm btn-block">
                <i class="fas fa-list"></i>
                {{ lang.btn.btnList }}
              </a>
            </div>
          </div>
          <div class="space-between"></div>
          <div class="col-sm-4">
            <div class="row">
              <a href="/posts/create-new-post" class="btn btn-primary btn-sm btn-block">
                <i class="fas fa-plus-square"></i>
                {{ lang.btn.btnNew }} {{ lang.titlePage.posts }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <form action="/posts/search" method="post">
          <input type="text" class="col-sm-5 form-control float-right" name="search" placeholder="Search...">
        </form>
      </div>
      </div>
    </div>
    <hr>
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-6 text-left"><label class="badge badge-secondary">{{ count }} data entries</label></div>
          <div class="col-sm-4 text-right text-default">
            <a href="">Remove</a>
          </div>
          <div class="col-sm-2 text-right" style="display: flex;">
            <div class="col-sm-7">
              <label>Show</label>
            </div>
            <div class="col-sm-3">
              <form>
                {{{ddShowLimits ""}}}
          </form>
            </div>
          </div>
        </div>
      </div>
      <div style="height:550px; overflow-y:auto">
        <div class="col-12 div-space shadow-sm p-3 bg-white">
          <div class="row">
            <div class="col-8">
              <div class="row">
                <div class="col-0">
                  <input class="" type="checkbox" value="">
          </div>
                  <div class="col-11">
                    <a href=""></a>
                    <div class="row div-hover">
                      <div class="space-between text-sm"><a href="/posts/edit/">{{@root.lang.btn.btnEdit}}</a></div>
                      <div class="space-between text-sm"><a href="">{{@root.lang.btn.btnView}}</a></div>
                      <div class="space-between text-sm"><a href="/posts/delete-post/">{{@root.lang.btn.btnRemove}}</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-2 text-right">
              </div>
              <div class="col-2 text-right"></div>
            </div>
          </div>
        </div>
      </div>