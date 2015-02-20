class AdminController < ApplicationController

	def show
		admin = User.find_by(id: params[:id])
		users_all = User.all
		groups = Group.all
		memberships = Membership.all


		render(:show, {locals: {admin: admin, users_all: users_all, groups: groups, memberships: memberships}})
	end

end