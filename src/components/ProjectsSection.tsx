import React from 'react';
import ProjectCard from './custom/ProjectCard';

const ProjectsSection = () => {
    return (
        <section className='relative flex justify-center overflow-clip' id='projects'>

            <div className='pb-16 pt-32 flex flex-col justify-center items-center gap-5'>
                <h2 className='text-6xl font-black mb-10'>Проекты</h2>

                <div className='grid gap-6 grid-cols-3'>
                    <ProjectCard
                        imageUrl='/pddapp-laptop.png'
                        title='"Кулагер" ПДД Тесты'
                        description='Приложение для решения ПДД тестов, подготовки к реальному тестированию. Таблицы и графики позволят отслеживать ваш прогресс.'
                        badges={['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Redux Toolkit', 'Cloudinary', 'shadcn/ui']}
                        liveUrl='https://pdd-app-xi.vercel.app/'
                        codeUrl='https://github.com/xtrphy/pdd-app'
                    />

                    <ProjectCard
                        imageUrl='/vk-analog-laptop.png'
                        title='VK Analog (ВКоннекте)'
                        description='Аналог социальной сети ВКонтакте. Пользователи могут публиковать посты, ставить лайки, комментировать, подписываться на людей и управлять своим профилем.'
                        badges={['React', 'Express', 'Prisma', 'PostgreSQL', 'Cloudinary', 'GitHub OAuth']}
                        liveUrl='https://vkonnekte-app.netlify.app/'
                        codeUrl='https://github.com/xtrphy/vk-analog'
                    />

                    <ProjectCard
                        imageUrl='/mindmates-laptop.png'
                        title='MindMates Project'
                        description='Приложение для поддержания ментального здоровья. Делайте записи, управляйте своими мыслями и привычками.'
                        badges={['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind', 'shadcn/ui']}
                        liveUrl='https://mind-mates-app.vercel.app/'
                        codeUrl='https://github.com/xtrphy/mind-mates-app'
                    />

                    <ProjectCard
                        imageUrl='/extrahands-laptop.png'
                        title='Extra Hands Team'
                        description='Сайт посвященный игровой модификации для популярной визуальной новеллы "Зайчик", разрабатываемая командой Extra Hands.'
                        badges={['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui']}
                        liveUrl='https://extrahands-website.vercel.app/'
                        codeUrl='https://github.com/xtrphy/extrahands-website'
                    />

                    <ProjectCard
                        imageUrl='/vaultix-laptop.png'
                        title='Google Drive Analog'
                        description='Vaultix - аналог облачного хранилища от Google. Сохраняйте файлы, создавайте папки и делитесь ими с друзьями и коллегами.'
                        badges={['EJS', 'Express', 'Prisma', 'PostgreSQL', 'Express-session', 'Passport', 'bcrypt', 'Cloudinary', 'shadcn/ui']}
                        codeUrl='https://github.com/xtrphy/file-uploader'
                    />

                    <ProjectCard
                        imageUrl='/blog-laptop.png'
                        title='Xtrphy Blog'
                        description='Личный блог с публикациями на тему веб-разработки. Админ-панель для управления контентом постов. Пишите комментарии и обсуждайте разные темы.'
                        badges={['React', 'Express', 'REST API', 'Context API', 'CSS Modules']}
                        codeUrl='https://github.com/xtrphy/blog-fullstack'
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;