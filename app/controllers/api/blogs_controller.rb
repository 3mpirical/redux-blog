class Api::BlogsController < ApplicationController
    before_action :get_blog, only: [:show, :update, :destroy]

    def index
        render( json: Blog.all() )
    end

    def show
        render( json: @blog )
    end

    def create
      blog = Blog.new(blog_params())
      
      if(blog.save())
          render( json: blog, status: 201 )
      else
          render( json: {error: blog.errors, response_text: "Data NotCreated"}, status: 422 )
      end
    end

    def update
        if(@blog.update(blog_params()))
            render( json: @blog )
        else
            render( json: {error: @blog.errors, response_text: "Data Not Updated"}, status: 422 )
        end
    end

    def destroy
        @blog.delete()
        render( json: {response_text: "Data Deleted"} )
    end

    private
        def get_blog
            return @blog = Blog.find(params[:id])
        end

        def blog_params
            return params.require(:blog).permit(:title, :author, :category, :text, :author_image, :banner)
        end
end
