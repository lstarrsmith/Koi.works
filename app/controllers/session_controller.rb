class SessionController < ApplicationController

	def create
		user = User.find_by({email: params["email"]})
		if user && user.authenticate(params["password"])
			if user['admin'] == true
				@error = false
				session["user_id"] = user.id
				redirect_to "/admin/#{user.id}"
			else 
				@error = false
				session["user_id"] = user.id
				redirect_to "/users/#{user.id}"
			end
		else
			@error = true
			render "welcome/index"
		end
	end

	def destroy
		reset_session
		render "welcome/index"
	end
end

