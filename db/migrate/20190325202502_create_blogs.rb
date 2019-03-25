class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :author
      t.string :category
      t.string :author_image
      t.string :text
      t.string :banner

      t.timestamps
    end
  end
end
