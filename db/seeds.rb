

Blog.destroy_all()

for i in (1..20)
    Blog.create(
        title: Faker::TvShows::RuPaul.quote(),
        author: Faker::Science.scientist(),
        category: "Miscellaneous",
        text: Faker::Lorem.paragraph_by_chars(500, false),
        author_image: Faker::Avatar.image(),
        banner: Faker::LoremFlickr.image("600x200", ["cool#{rand(0..20)}"]),
    )
end

puts "_____Database_Seeded_____"