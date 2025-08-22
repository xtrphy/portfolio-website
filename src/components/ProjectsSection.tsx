import React from 'react';
import ProjectCard from './custom/ProjectCard';

const ProjectsSection = () => {
    return (
        <section
            className='relative min-h-screen flex justify-center items-center overflow-clip px-4'
            id='projects'
        >

            <div className='pb-16 pt-32 flex flex-col justify-center items-center gap-5'>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black mb-10'>Проекты</h2>

                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3'>
                    <ProjectCard
                        imageUrl='/pddapp-laptop.webp'
                        title='"Кулагер" ПДД Тесты'
                        description='Приложение для решения ПДД тестов, подготовки к реальному тестированию. Таблицы и графики позволят отслеживать ваш прогресс.'
                        badges={['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Redux Toolkit', 'Cloudinary', 'shadcn/ui']}
                        liveUrl='https://pdd-app-xi.vercel.app/'
                        codeUrl='https://github.com/xtrphy/pdd-app'
                    />

                    <ProjectCard
                        imageUrl='/car-marketplace-laptop.webp'
                        title='Моторум.kz'
                        description='Маркетплейс для продажи и покупки автомобилей. Используйте фильтры для поиска нужной машины, публикуйте свои объявления с подробной информацией о вашем транспорте, спецтехнике, запчасти.'
                        badges={['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Cloudinary', 'Numeral']}
                        liveUrl='https://car-marketplace-pi.vercel.app/cars'
                        codeUrl='https://github.com/xtrphy/car-marketplace'
                    />

                    <ProjectCard
                        imageUrl='/vk-analog-laptop.webp'
                        title='VK Analog (ВКоннекте)'
                        description='Аналог социальной сети ВКонтакте. Пользователи могут публиковать посты, ставить лайки, комментировать, подписываться на людей и управлять своим профилем.'
                        badges={['React', 'Express', 'Prisma', 'PostgreSQL', 'Cloudinary', 'GitHub OAuth']}
                        liveUrl='https://vkonnekte-app.netlify.app/'
                        codeUrl='https://github.com/xtrphy/vk-analog'
                    />

                    <ProjectCard
                        imageUrl='/mindmates-laptop.webp'
                        title='MindMates Project'
                        description='Приложение для поддержания ментального здоровья. Делайте записи, управляйте своими мыслями и привычками.'
                        badges={['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind', 'shadcn/ui']}
                        liveUrl='https://mind-mates-app.vercel.app/'
                        codeUrl='https://github.com/xtrphy/mind-mates-app'
                    />

                    <ProjectCard
                        imageUrl='/extrahands-laptop.webp'
                        title='Extra Hands Team'
                        description='Сайт посвященный игровой модификации для популярной визуальной новеллы "Зайчик", разрабатываемая командой Extra Hands.'
                        badges={['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui']}
                        liveUrl='https://extrahands-website.vercel.app/'
                        codeUrl='https://github.com/xtrphy/extrahands-website'
                    />

                    <ProjectCard
                        imageUrl='/vaultix-laptop.webp'
                        title='Google Drive Analog'
                        description='Vaultix - аналог облачного хранилища от Google. Сохраняйте файлы, создавайте папки и делитесь ими с друзьями и коллегами.'
                        badges={['EJS', 'Express', 'Prisma', 'PostgreSQL', 'Express-session', 'Passport', 'bcrypt', 'Cloudinary', 'shadcn/ui']}
                        codeUrl='https://github.com/xtrphy/file-uploader'
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;