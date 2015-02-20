class RequestsController < ApplicationController

	def create
		new_request = Request.create({
			email: params['email']
			})
		render json: new_request
	end
end

