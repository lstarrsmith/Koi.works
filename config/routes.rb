Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'



root 'welcome#index'

post 'session' => 'session#create'
delete 'session' => 'session#destroy'
post '/requests' => 'requests#create'

resources :users 

resources :admin do

  resources :memberships
  resources :groups
  resources :users

end



#         Prefix Verb   URI Pattern                                     Controller#Action
#                  root GET    /                                               welcome#index
#               session POST   /session(.:format)                              session#create
#                       DELETE /session(.:format)                              session#destroy
#                 users GET    /users(.:format)                                users#index
#                       POST   /users(.:format)                                users#create
#              new_user GET    /users/new(.:format)                            users#new
#             edit_user GET    /users/:id/edit(.:format)                       users#edit
#                  user GET    /users/:id(.:format)                            users#show
#                       PATCH  /users/:id(.:format)                            users#update
#                       PUT    /users/:id(.:format)                            users#update
#                       DELETE /users/:id(.:format)                            users#destroy
#     admin_memberships GET    /admin/:admin_id/memberships(.:format)          memberships#index
#                       POST   /admin/:admin_id/memberships(.:format)          memberships#create
#  new_admin_membership GET    /admin/:admin_id/memberships/new(.:format)      memberships#new
# edit_admin_membership GET    /admin/:admin_id/memberships/:id/edit(.:format) memberships#edit
#      admin_membership GET    /admin/:admin_id/memberships/:id(.:format)      memberships#show
#                       PATCH  /admin/:admin_id/memberships/:id(.:format)      memberships#update
#                       PUT    /admin/:admin_id/memberships/:id(.:format)      memberships#update
#                       DELETE /admin/:admin_id/memberships/:id(.:format)      memberships#destroy
#          admin_groups GET    /admin/:admin_id/groups(.:format)               groups#index
#                       POST   /admin/:admin_id/groups(.:format)               groups#create
#       new_admin_group GET    /admin/:admin_id/groups/new(.:format)           groups#new
#      edit_admin_group GET    /admin/:admin_id/groups/:id/edit(.:format)      groups#edit
#           admin_group GET    /admin/:admin_id/groups/:id(.:format)           groups#show
#                       PATCH  /admin/:admin_id/groups/:id(.:format)           groups#update
#                       PUT    /admin/:admin_id/groups/:id(.:format)           groups#update
#                       DELETE /admin/:admin_id/groups/:id(.:format)           groups#destroy
#           admin_users GET    /admin/:admin_id/users(.:format)                users#index
#                       POST   /admin/:admin_id/users(.:format)                users#create
#        new_admin_user GET    /admin/:admin_id/users/new(.:format)            users#new
#       edit_admin_user GET    /admin/:admin_id/users/:id/edit(.:format)       users#edit
#            admin_user GET    /admin/:admin_id/users/:id(.:format)            users#show
#                       PATCH  /admin/:admin_id/users/:id(.:format)            users#update
#                       PUT    /admin/:admin_id/users/:id(.:format)            users#update
#                       DELETE /admin/:admin_id/users/:id(.:format)            users#destroy
#           admin_index GET    /admin(.:format)                                admin#index
#                       POST   /admin(.:format)                                admin#create
#             new_admin GET    /admin/new(.:format)                            admin#new
#            edit_admin GET    /admin/:id/edit(.:format)                       admin#edit
#                 admin GET    /admin/:id(.:format)                            admin#show
#                       PATCH  /admin/:id(.:format)                            admin#update
#                       PUT    /admin/:id(.:format)                            admin#update
#                       DELETE /admin/:id(.:format)                            admin#destroy



  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
