class UsersController < ApplicationController

	def show
		user = User.find_by(id: params[:id])
		group = user.groups.first
		render(:show, {locals: {user: user, group: group}})
	end


	def create
		new_user = User.create({
			fname: params["fname"], 
			lname: params["lname"], 
			email: params["email"], 
			password: params["password"],
			phone: params["phone"],
			city: params["city"],
			state: params["state"],
			age: params["age"].to_i})
		redirect_to "/"
	end

	def destroy
		user = User.find_by(id: params[:id])
		user.destroy
		if params[:admin_id]
			redirect_to "/admin/#{params[:admin_id]}"
		else
			redirect_to "/"
		end
	end


end