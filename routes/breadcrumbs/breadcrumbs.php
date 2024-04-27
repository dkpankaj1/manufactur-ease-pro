<?php
use Diglactic\Breadcrumbs\Breadcrumbs;
use Diglactic\Breadcrumbs\Generator as BreadcrumbTrail;
use Spatie\Permission\Models\Role;

Breadcrumbs::for('dashboard', function (BreadcrumbTrail $trail) {
    $trail->push('Dashboard', route('dashboard'));
});


Breadcrumbs::for('profile', function (BreadcrumbTrail $trail) {
    $trail->parent('dashboard');
    $trail->push('Profile', route('profile.edit'));
});
//  =====================================================
Breadcrumbs::for('role.index',function(BreadcrumbTrail $trail){
    $trail->parent('dashboard'); 
    $trail->push('Role',route('role.index'));
});
Breadcrumbs::for('role.create',function(BreadcrumbTrail $trail){
    $trail->parent('role.index'); 
    $trail->push('Create',route('role.create'));
});
Breadcrumbs::for('role.show',function(BreadcrumbTrail $trail,$role){
    $trail->parent('role.index'); 
    $trail->push('Show',route('role.show',$role));
});

Breadcrumbs::for('role.edit',function(BreadcrumbTrail $trail,$role){
    $trail->parent('role.index'); 
    $trail->push('Edit',route('role.edit',$role));
});

//  =====================================================

Breadcrumbs::for('user.index',function(BreadcrumbTrail $trail){
    $trail->parent('dashboard'); 
    $trail->push('User',route('user.index'));
});

Breadcrumbs::for('user.create',function(BreadcrumbTrail $trail){
    $trail->parent('user.index'); 
    $trail->push('Create',route('user.create'));
});
Breadcrumbs::for('user.show',function(BreadcrumbTrail $trail,$user){
    $trail->parent('user.index'); 
    $trail->push('Show',route('user.show',$user));
});

Breadcrumbs::for('user.edit',function(BreadcrumbTrail $trail,$user){
    $trail->parent('user.index'); 
    $trail->push('Edit',route('user.edit',$user));
});
//  =====================================================




