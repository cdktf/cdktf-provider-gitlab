/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster agent to associate with this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#cluster_agent_id ProjectEnvironment#cluster_agent_id}
  */
  readonly clusterAgentId?: number;
  /**
  * Place to link to for this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#external_url ProjectEnvironment#external_url}
  */
  readonly externalUrl?: string;
  /**
  * The Flux resource path to associate with this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#flux_resource_path ProjectEnvironment#flux_resource_path}
  */
  readonly fluxResourcePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#id ProjectEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Kubernetes namespace to associate with this environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#kubernetes_namespace ProjectEnvironment#kubernetes_namespace}
  */
  readonly kubernetesNamespace?: string;
  /**
  * The name of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#name ProjectEnvironment#name}
  */
  readonly name: string;
  /**
  * The ID or full path of the project to environment is created for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#project ProjectEnvironment#project}
  */
  readonly project: string;
  /**
  * Determines whether the environment is attempted to be stopped before the environment is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#stop_before_destroy ProjectEnvironment#stop_before_destroy}
  */
  readonly stopBeforeDestroy?: boolean | cdktf.IResolvable;
  /**
  * The tier of the new environment. Valid values are `production`, `staging`, `testing`, `development`, `other`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#tier ProjectEnvironment#tier}
  */
  readonly tier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment gitlab_project_environment}
*/
export class ProjectEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectEnvironment to import
  * @param importFromId The id of the existing ProjectEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.0/docs/resources/project_environment gitlab_project_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_environment',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.6.0',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterAgentId = config.clusterAgentId;
    this._externalUrl = config.externalUrl;
    this._fluxResourcePath = config.fluxResourcePath;
    this._id = config.id;
    this._kubernetesNamespace = config.kubernetesNamespace;
    this._name = config.name;
    this._project = config.project;
    this._stopBeforeDestroy = config.stopBeforeDestroy;
    this._tier = config.tier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_agent_id - computed: false, optional: true, required: false
  private _clusterAgentId?: number; 
  public get clusterAgentId() {
    return this.getNumberAttribute('cluster_agent_id');
  }
  public set clusterAgentId(value: number) {
    this._clusterAgentId = value;
  }
  public resetClusterAgentId() {
    this._clusterAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAgentIdInput() {
    return this._clusterAgentId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // external_url - computed: false, optional: true, required: false
  private _externalUrl?: string; 
  public get externalUrl() {
    return this.getStringAttribute('external_url');
  }
  public set externalUrl(value: string) {
    this._externalUrl = value;
  }
  public resetExternalUrl() {
    this._externalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUrlInput() {
    return this._externalUrl;
  }

  // flux_resource_path - computed: false, optional: true, required: false
  private _fluxResourcePath?: string; 
  public get fluxResourcePath() {
    return this.getStringAttribute('flux_resource_path');
  }
  public set fluxResourcePath(value: string) {
    this._fluxResourcePath = value;
  }
  public resetFluxResourcePath() {
    this._fluxResourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fluxResourcePathInput() {
    return this._fluxResourcePath;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kubernetes_namespace - computed: false, optional: true, required: false
  private _kubernetesNamespace?: string; 
  public get kubernetesNamespace() {
    return this.getStringAttribute('kubernetes_namespace');
  }
  public set kubernetesNamespace(value: string) {
    this._kubernetesNamespace = value;
  }
  public resetKubernetesNamespace() {
    this._kubernetesNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNamespaceInput() {
    return this._kubernetesNamespace;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stop_before_destroy - computed: false, optional: true, required: false
  private _stopBeforeDestroy?: boolean | cdktf.IResolvable; 
  public get stopBeforeDestroy() {
    return this.getBooleanAttribute('stop_before_destroy');
  }
  public set stopBeforeDestroy(value: boolean | cdktf.IResolvable) {
    this._stopBeforeDestroy = value;
  }
  public resetStopBeforeDestroy() {
    this._stopBeforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopBeforeDestroyInput() {
    return this._stopBeforeDestroy;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_agent_id: cdktf.numberToTerraform(this._clusterAgentId),
      external_url: cdktf.stringToTerraform(this._externalUrl),
      flux_resource_path: cdktf.stringToTerraform(this._fluxResourcePath),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_namespace: cdktf.stringToTerraform(this._kubernetesNamespace),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      stop_before_destroy: cdktf.booleanToTerraform(this._stopBeforeDestroy),
      tier: cdktf.stringToTerraform(this._tier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_agent_id: {
        value: cdktf.numberToHclTerraform(this._clusterAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_url: {
        value: cdktf.stringToHclTerraform(this._externalUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flux_resource_path: {
        value: cdktf.stringToHclTerraform(this._fluxResourcePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_namespace: {
        value: cdktf.stringToHclTerraform(this._kubernetesNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stop_before_destroy: {
        value: cdktf.booleanToHclTerraform(this._stopBeforeDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
