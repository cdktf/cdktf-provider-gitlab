/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectMirrorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines the mirror authentication method. Valid values are: `ssh_public_key`, `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror#auth_method ProjectMirror#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Determines if the mirror is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror#enabled ProjectMirror#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if divergent refs are skipped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror#keep_divergent_refs ProjectMirror#keep_divergent_refs}
  */
  readonly keepDivergentRefs?: boolean | cdktf.IResolvable;
  /**
  * Contains a regular expression. Only branches with names matching the regex are mirrored. Requires only_protected_branches to be disabled. Premium and Ultimate only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror#mirror_branch_regex ProjectMirror#mirror_branch_regex}
  */
  readonly mirrorBranchRegex?: string;
  /**
  * Determines if only protected branches are mirrored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror#only_protected_branches ProjectMirror#only_protected_branches}
  */
  readonly onlyProtectedBranches?: boolean | cdktf.IResolvable;
  /**
  * The id of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror#project ProjectMirror#project}
  */
  readonly project: string;
  /**
  * The URL of the remote repository to be mirrored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror#url ProjectMirror#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror gitlab_project_mirror}
*/
export class ProjectMirror extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_mirror";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectMirror resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectMirror to import
  * @param importFromId The id of the existing ProjectMirror that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectMirror to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_mirror", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.1/docs/resources/project_mirror gitlab_project_mirror} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectMirrorConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectMirrorConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_mirror',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.1.1',
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
    this._authMethod = config.authMethod;
    this._enabled = config.enabled;
    this._keepDivergentRefs = config.keepDivergentRefs;
    this._mirrorBranchRegex = config.mirrorBranchRegex;
    this._onlyProtectedBranches = config.onlyProtectedBranches;
    this._project = config.project;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: true, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_divergent_refs - computed: true, optional: true, required: false
  private _keepDivergentRefs?: boolean | cdktf.IResolvable; 
  public get keepDivergentRefs() {
    return this.getBooleanAttribute('keep_divergent_refs');
  }
  public set keepDivergentRefs(value: boolean | cdktf.IResolvable) {
    this._keepDivergentRefs = value;
  }
  public resetKeepDivergentRefs() {
    this._keepDivergentRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDivergentRefsInput() {
    return this._keepDivergentRefs;
  }

  // mirror_branch_regex - computed: true, optional: true, required: false
  private _mirrorBranchRegex?: string; 
  public get mirrorBranchRegex() {
    return this.getStringAttribute('mirror_branch_regex');
  }
  public set mirrorBranchRegex(value: string) {
    this._mirrorBranchRegex = value;
  }
  public resetMirrorBranchRegex() {
    this._mirrorBranchRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorBranchRegexInput() {
    return this._mirrorBranchRegex;
  }

  // mirror_id - computed: true, optional: false, required: false
  public get mirrorId() {
    return this.getNumberAttribute('mirror_id');
  }

  // only_protected_branches - computed: true, optional: true, required: false
  private _onlyProtectedBranches?: boolean | cdktf.IResolvable; 
  public get onlyProtectedBranches() {
    return this.getBooleanAttribute('only_protected_branches');
  }
  public set onlyProtectedBranches(value: boolean | cdktf.IResolvable) {
    this._onlyProtectedBranches = value;
  }
  public resetOnlyProtectedBranches() {
    this._onlyProtectedBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyProtectedBranchesInput() {
    return this._onlyProtectedBranches;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_method: cdktf.stringToTerraform(this._authMethod),
      enabled: cdktf.booleanToTerraform(this._enabled),
      keep_divergent_refs: cdktf.booleanToTerraform(this._keepDivergentRefs),
      mirror_branch_regex: cdktf.stringToTerraform(this._mirrorBranchRegex),
      only_protected_branches: cdktf.booleanToTerraform(this._onlyProtectedBranches),
      project: cdktf.stringToTerraform(this._project),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_divergent_refs: {
        value: cdktf.booleanToHclTerraform(this._keepDivergentRefs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mirror_branch_regex: {
        value: cdktf.stringToHclTerraform(this._mirrorBranchRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_protected_branches: {
        value: cdktf.booleanToHclTerraform(this._onlyProtectedBranches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
