import React, { useState } from 'react';
import { Upload, Database, CheckCircle, Activity, FileText, AlertCircle } from 'lucide-react';

const NeuroLab = () => {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResults(null);
      setError(null);
    }
  };

  const startPipeline = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Points to your Python FastAPI backend on Port 8000
      const response = await fetch('http://localhost:8000/upload-mri', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Pipeline Communication Failure');

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
      console.error("Analysis Error:", err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 p-8 font-sans selection:bg-lab-cyan/30">
      <div className="max-w-6xl mx-auto mt-20">
        <h1 className="text-4xl font-black italic tracking-tighter text-white mb-12 flex items-center gap-4">
          <span className="text-lab-cyan text-2xl font-mono not-italic">//</span> NEURO_ANALYSIS_LAB
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT PANEL: UPLOAD */}
          <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between transition-all hover:border-slate-700">
            <div>
              <div className="mb-8 p-12 border-2 border-dashed border-slate-800 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:border-lab-cyan/50 hover:bg-lab-cyan/5 transition-all group">
                <Upload className="mb-4 group-hover:text-lab-cyan transition-colors" size={48} />
                <p className="text-xs uppercase tracking-widest font-bold">Upload_NIfTI_Scan</p>
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  accept=".nii,.gz"
                />
              </div>

              {file && (
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <FileText className="text-lab-cyan" size={18} />
                    <span className="text-xs font-mono truncate max-w-[200px]">{file.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 uppercase italic">Ready_for_Processing</span>
                </div>
              )}
            </div>

            <button 
              onClick={startPipeline}
              disabled={!file || isAnalyzing}
              className={`w-full py-4 rounded-xl font-black tracking-widest text-sm uppercase transition-all flex items-center justify-center gap-3
                ${isAnalyzing ? 'bg-slate-800 text-slate-500' : 'bg-lab-green text-black hover:scale-[1.02] active:scale-95 shadow-lg shadow-lab-green/20'}`}
            >
              {isAnalyzing ? (
                <><Activity className="animate-spin" /> Analyzing_Structure...</>
              ) : (
                'Start_Pipeline'
              )}
            </button>
          </div>

          {/* RIGHT PANEL: RESULTS */}
          <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-8 relative overflow-hidden transition-all hover:border-slate-700">
            {error && (
              <div className="absolute inset-0 bg-red-950/20 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center animate-in fade-in">
                <AlertCircle className="text-red-500 mb-4" size={48} />
                <h3 className="text-white font-bold mb-2 uppercase">Pipeline_Error</h3>
                <p className="text-xs text-red-400">{error}</p>
                <button onClick={() => setError(null)} className="mt-6 text-[10px] underline uppercase tracking-widest">Reset_System</button>
              </div>
            )}

            {results ? (
              <div className="animate-in fade-in zoom-in duration-500">
                <div className="flex items-center gap-2 mb-6 text-lab-green">
                  <CheckCircle size={20} />
                  <h3 className="uppercase text-sm font-bold tracking-widest">Analysis_Report</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-xs border-b border-slate-800 pb-3">
                    <span className="text-slate-500 uppercase tracking-tighter font-bold">File_Identifier:</span>
                    <span className="text-lab-cyan font-mono italic">{results.metadata?.filename || "OAS1_UNKNOWN"}</span>
                  </div>

                  <div className="flex justify-between text-xs pt-1">
                    <span className="text-slate-400">L_THALAMUS_VOL:</span>
                    <span className="text-white font-bold">{results.results?.left_thalamus_vol} mm³</span>
                  </div>

                  <div className="flex justify-between text-xs pt-1">
                    <span className="text-slate-400">R_THALAMUS_VOL:</span>
                    <span className="text-white font-bold">{results.results?.right_thalamus_vol} mm³</span>
                  </div>

                  <div className="flex justify-between text-sm pt-4 border-t border-slate-700 font-black italic">
                    <span className="text-lab-green text-xs uppercase not-italic">Total_Subcortical_Vol:</span>
                    <span className="text-lab-green">{results.results?.total_volume_mm3} mm³</span>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                    <div className="flex justify-between text-[10px] text-slate-500 italic">
                      <span>PROCESSING_TIME:</span>
                      <span className="text-slate-300 font-mono">{results.metadata?.processing_time}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 italic uppercase">
                      <span>PIPELINE_STATUS:</span>
                      <span className="text-lab-cyan">{results.results?.holding_status}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 uppercase">
                      <span>OPERATOR_ID:</span>
                      <span className="text-slate-400">{results.metadata?.matric_no}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-500 opacity-20 py-20">
                <Database size={80} strokeWidth={1} />
                <p className="mt-6 text-[10px] uppercase tracking-[0.3em] italic">Waiting_for_Scan_Input</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuroLab;