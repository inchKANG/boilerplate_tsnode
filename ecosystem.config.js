module.exports = {
    apps: [
        {
            name: 'server1',
            script: 'ts-node -r tsconfig-paths/register dist/index.js',
            instances: 1,
            exec_mode: 'fork',
            env: {
              "NODE_ENV": "production",
            },
            max_memory_restart:"2G",
            args:"--port=4444",
            node_args: "--expose-gc --nouse-idle-notification --max-old-space-size=4096"
        }
    ]
}  
