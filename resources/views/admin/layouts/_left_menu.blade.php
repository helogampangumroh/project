<ul id="menu" class="metismenu page-sidebar-menu">

    <li {!! Request::is('admin') ? 'class="active"' : '' !!}>
        <a href="{{ route('admin.dashboard') }}">
            <i class="livicon" data-name="dashboard" data-size="18" data-c="#418BCA" data-hc="#418BCA" data-loop="true"></i>
            <span class="title">Dashboard</span>
        </a>
    </li>

    <li {!! Request::is('admin/users') ||
    Request::is('admin/bulk_import_users') ||
    Request::is('admin/users/create') ||
    Request::is('admin/user_profile') ||
    Request::is('admin/users/*') ||
    Request::is('admin/deleted_users')
        ? 'class="mm-active"'
        : '' !!}>
        <a href="#">
            <i class="livicon" data-name="user" data-size="18" data-c="#6CC66C" data-hc="#6CC66C"
                data-loop="true"></i>
            <span class="title">Users</span>
            <span class="fas fa-angle-left"></span>
        </a>
        <ul class="sub-menu">
            <li {!! Request::is('admin/users') ? 'class="active" id="active"' : '' !!}>
                <a href="{{ URL::to('admin/users') }}">
                    <i class="fa fa-angle-double-right"></i>
                    Users
                </a>
            </li>
            <li {!! Request::is('admin/users/create') ? 'class="active" id="active"' : '' !!}>
                <a href="{{ URL::to('admin/users/create') }}">
                    <i class="fa fa-angle-double-right"></i>
                    Add New User
                </a>
            </li>
            <li {!! (Request::is('admin/users/*') && !Request::is('admin/users/create')) || Request::is('admin/user_profile')
                ? 'class="active" id="active"'
                : '' !!}>
                <a href="{{ URL::route('admin.users.show', Sentinel::getUser()->id) }}">
                    <i class="fa fa-angle-double-right"></i>
                    View Profile
                </a>
            </li>
            <li {!! Request::is('admin/deleted_users') ? 'class="active" id="active"' : '' !!}>
                <a href="{{ URL::to('admin/deleted_users') }}">
                    <i class="fa fa-angle-double-right"></i>
                    Deleted Users
                </a>
            </li>
        </ul>
    </li>
    <li {!! Request::is('admin/roles') || Request::is('admin/roles/create') || Request::is('admin/roles/*')
        ? 'class="mm-active"'
        : '' !!}>
        <a href="#">
            <i class="livicon" data-name="users" data-size="18" data-c="#418BCA" data-hc="#418BCA"
                data-loop="true"></i>
            <span class="title">Roles</span>
            <span class="fas fa-angle-left"></span>
        </a>
        <ul class="sub-menu">
            <li {!! Request::is('admin/roles') ? 'class="active" id="active"' : '' !!}>
                <a href="{{ URL::to('admin/roles') }}">
                    <i class="fa fa-angle-double-right"></i>
                    Roles List
                </a>
            </li>
            <li {!! Request::is('admin/roles/create') ? 'class="active" id="active"' : '' !!}>
                <a href="{{ URL::to('admin/roles/create') }}">
                    <i class="fa fa-angle-double-right"></i>
                    Add New Role
                </a>
            </li>
        </ul>
    </li>


    <li {!! Request::is('admin/news') || Request::is('admin/news_item') ? 'class="mm-active"' : '' !!}>
        <a href="#">
            <i class="livicon" data-name="move" data-c="#ef6f6c" data-hc="#ef6f6c" data-size="18"
                data-loop="true"></i>
            <span class="title">News</span>
            <span class="fas fa-angle-left"></span>
        </a>
        <ul class="sub-menu">
            <li {!! Request::is('admin/news') ? 'class="active"' : '' !!}>
                <a href="{{ URL::to('admin/news') }}">
                    <i class="fa fa-angle-double-right"></i>
                    News
                </a>
            </li>
            <li {!! Request::is('admin/news_item') ? 'class="active"' : '' !!}>
                <a href="{{ URL::to('admin/news_item') }}">
                    <i class="fa fa-angle-double-right"></i>
                    News Details
                </a>
            </li>
        </ul>
    </li>

    <li {!! Request::is('admin/activity_log') ? 'class="active"' : '' !!}>
        <a href="{{ URL::to('admin/activity_log') }}">
            <i class="livicon" data-name="eye-open" data-size="18" data-c="#F89A14" data-hc="#F89A14" data-loop="true"></i>
            Activity Log
        </a>
    </li>

    <!-- Menus generated by CRUD generator -->
    @include('admin/layouts/menu')
</ul>
