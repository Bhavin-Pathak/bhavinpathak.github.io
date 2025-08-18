export default function Footer() {
    return (
        <footer className="text-center py-4 mt-10">
            <p className="text-gray-500 dark:text-gray-500 text-sm md:text-base">
                © {new Date().getFullYear()} All Rights Reserved. <br />
                Designed & Developed by Bhaviin
            </p>
        </footer>
    );
}
