/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabArtifactFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the artifact file within the job's artifacts archive. This path is relative to the archive contents (not the local filesystem). Ensure each `gitlab_artifact_file` data source in your configuration uses a unique artifact_path to avoid ambiguity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#artifact_path DataGitlabArtifactFile#artifact_path}
  */
  readonly artifactPath: string;
  /**
  * The name of the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#job DataGitlabArtifactFile#job}
  */
  readonly job: string;
  /**
  * Maximum bytes to read from the artifact. Defaults to 10MB (10485760 bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#max_size_bytes DataGitlabArtifactFile#max_size_bytes}
  */
  readonly maxSizeBytes?: number;
  /**
  * The ID or URL-encoded path of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#project DataGitlabArtifactFile#project}
  */
  readonly project: string;
  /**
  * The name of the branch, tag, or commit SHA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#ref DataGitlabArtifactFile#ref}
  */
  readonly ref: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file gitlab_artifact_file}
*/
export class DataGitlabArtifactFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_artifact_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitlabArtifactFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitlabArtifactFile to import
  * @param importFromId The id of the existing DataGitlabArtifactFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitlabArtifactFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_artifact_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.0/docs/data-sources/artifact_file gitlab_artifact_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabArtifactFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitlabArtifactFileConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_artifact_file',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.6.0',
        providerVersionConstraint: '~> 18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactPath = config.artifactPath;
    this._job = config.job;
    this._maxSizeBytes = config.maxSizeBytes;
    this._project = config.project;
    this._ref = config.ref;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_path - computed: false, optional: false, required: true
  private _artifactPath?: string; 
  public get artifactPath() {
    return this.getStringAttribute('artifact_path');
  }
  public set artifactPath(value: string) {
    this._artifactPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactPathInput() {
    return this._artifactPath;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // content_base64 - computed: true, optional: false, required: false
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job - computed: false, optional: false, required: true
  private _job?: string; 
  public get job() {
    return this.getStringAttribute('job');
  }
  public set job(value: string) {
    this._job = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobInput() {
    return this._job;
  }

  // max_size_bytes - computed: false, optional: true, required: false
  private _maxSizeBytes?: number; 
  public get maxSizeBytes() {
    return this.getNumberAttribute('max_size_bytes');
  }
  public set maxSizeBytes(value: number) {
    this._maxSizeBytes = value;
  }
  public resetMaxSizeBytes() {
    this._maxSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeBytesInput() {
    return this._maxSizeBytes;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_path: cdktf.stringToTerraform(this._artifactPath),
      job: cdktf.stringToTerraform(this._job),
      max_size_bytes: cdktf.numberToTerraform(this._maxSizeBytes),
      project: cdktf.stringToTerraform(this._project),
      ref: cdktf.stringToTerraform(this._ref),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_path: {
        value: cdktf.stringToHclTerraform(this._artifactPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job: {
        value: cdktf.stringToHclTerraform(this._job),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_size_bytes: {
        value: cdktf.numberToHclTerraform(this._maxSizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref: {
        value: cdktf.stringToHclTerraform(this._ref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
