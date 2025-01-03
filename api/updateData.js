export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, answer } = req.body;

        const updatedData = {
            message: "Player data updated",
            newPlayer: { name, answer },
        };

        res.status(200).json(updatedData);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}