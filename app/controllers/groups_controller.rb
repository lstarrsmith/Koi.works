class GroupsController < ApplicationController

	def index
		groups = Group.all
		admin = User.find_by(id: params[:id])
		
		render(:index, {locals: {admin: admin, groups: groups}})

	end



end