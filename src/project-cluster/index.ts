/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base domain of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#domain ProjectCluster#domain}
  */
  readonly domain?: string;
  /**
  * Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#enabled ProjectCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The associated environment to the cluster. Defaults to `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#environment_scope ProjectCluster#environment_scope}
  */
  readonly environmentScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#id ProjectCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The URL to access the Kubernetes API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#kubernetes_api_url ProjectCluster#kubernetes_api_url}
  */
  readonly kubernetesApiUrl: string;
  /**
  * The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#kubernetes_authorization_type ProjectCluster#kubernetes_authorization_type}
  */
  readonly kubernetesAuthorizationType?: string;
  /**
  * TLS certificate (needed if API is using a self-signed TLS certificate).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#kubernetes_ca_cert ProjectCluster#kubernetes_ca_cert}
  */
  readonly kubernetesCaCert?: string;
  /**
  * The unique namespace related to the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#kubernetes_namespace ProjectCluster#kubernetes_namespace}
  */
  readonly kubernetesNamespace?: string;
  /**
  * The token to authenticate against Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#kubernetes_token ProjectCluster#kubernetes_token}
  */
  readonly kubernetesToken: string;
  /**
  * Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#managed ProjectCluster#managed}
  */
  readonly managed?: boolean | cdktf.IResolvable;
  /**
  * The ID of the management project for the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#management_project_id ProjectCluster#management_project_id}
  */
  readonly managementProjectId?: string;
  /**
  * The name of cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#name ProjectCluster#name}
  */
  readonly name: string;
  /**
  * The id of the project to add the cluster to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#project ProjectCluster#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster gitlab_project_cluster}
*/
export class ProjectCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectCluster to import
  * @param importFromId The id of the existing ProjectCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_project_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.2.0/docs/resources/project_cluster gitlab_project_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_cluster',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '18.2.0',
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
    this._domain = config.domain;
    this._enabled = config.enabled;
    this._environmentScope = config.environmentScope;
    this._id = config.id;
    this._kubernetesApiUrl = config.kubernetesApiUrl;
    this._kubernetesAuthorizationType = config.kubernetesAuthorizationType;
    this._kubernetesCaCert = config.kubernetesCaCert;
    this._kubernetesNamespace = config.kubernetesNamespace;
    this._kubernetesToken = config.kubernetesToken;
    this._managed = config.managed;
    this._managementProjectId = config.managementProjectId;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enabled - computed: false, optional: true, required: false
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

  // environment_scope - computed: false, optional: true, required: false
  private _environmentScope?: string; 
  public get environmentScope() {
    return this.getStringAttribute('environment_scope');
  }
  public set environmentScope(value: string) {
    this._environmentScope = value;
  }
  public resetEnvironmentScope() {
    this._environmentScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentScopeInput() {
    return this._environmentScope;
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

  // kubernetes_api_url - computed: false, optional: false, required: true
  private _kubernetesApiUrl?: string; 
  public get kubernetesApiUrl() {
    return this.getStringAttribute('kubernetes_api_url');
  }
  public set kubernetesApiUrl(value: string) {
    this._kubernetesApiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesApiUrlInput() {
    return this._kubernetesApiUrl;
  }

  // kubernetes_authorization_type - computed: false, optional: true, required: false
  private _kubernetesAuthorizationType?: string; 
  public get kubernetesAuthorizationType() {
    return this.getStringAttribute('kubernetes_authorization_type');
  }
  public set kubernetesAuthorizationType(value: string) {
    this._kubernetesAuthorizationType = value;
  }
  public resetKubernetesAuthorizationType() {
    this._kubernetesAuthorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesAuthorizationTypeInput() {
    return this._kubernetesAuthorizationType;
  }

  // kubernetes_ca_cert - computed: false, optional: true, required: false
  private _kubernetesCaCert?: string; 
  public get kubernetesCaCert() {
    return this.getStringAttribute('kubernetes_ca_cert');
  }
  public set kubernetesCaCert(value: string) {
    this._kubernetesCaCert = value;
  }
  public resetKubernetesCaCert() {
    this._kubernetesCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesCaCertInput() {
    return this._kubernetesCaCert;
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

  // kubernetes_token - computed: false, optional: false, required: true
  private _kubernetesToken?: string; 
  public get kubernetesToken() {
    return this.getStringAttribute('kubernetes_token');
  }
  public set kubernetesToken(value: string) {
    this._kubernetesToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesTokenInput() {
    return this._kubernetesToken;
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: boolean | cdktf.IResolvable; 
  public get managed() {
    return this.getBooleanAttribute('managed');
  }
  public set managed(value: boolean | cdktf.IResolvable) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed;
  }

  // management_project_id - computed: false, optional: true, required: false
  private _managementProjectId?: string; 
  public get managementProjectId() {
    return this.getStringAttribute('management_project_id');
  }
  public set managementProjectId(value: string) {
    this._managementProjectId = value;
  }
  public resetManagementProjectId() {
    this._managementProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementProjectIdInput() {
    return this._managementProjectId;
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

  // platform_type - computed: true, optional: false, required: false
  public get platformType() {
    return this.getStringAttribute('platform_type');
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

  // provider_type - computed: true, optional: false, required: false
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_scope: cdktf.stringToTerraform(this._environmentScope),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_api_url: cdktf.stringToTerraform(this._kubernetesApiUrl),
      kubernetes_authorization_type: cdktf.stringToTerraform(this._kubernetesAuthorizationType),
      kubernetes_ca_cert: cdktf.stringToTerraform(this._kubernetesCaCert),
      kubernetes_namespace: cdktf.stringToTerraform(this._kubernetesNamespace),
      kubernetes_token: cdktf.stringToTerraform(this._kubernetesToken),
      managed: cdktf.booleanToTerraform(this._managed),
      management_project_id: cdktf.stringToTerraform(this._managementProjectId),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      environment_scope: {
        value: cdktf.stringToHclTerraform(this._environmentScope),
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
      kubernetes_api_url: {
        value: cdktf.stringToHclTerraform(this._kubernetesApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_authorization_type: {
        value: cdktf.stringToHclTerraform(this._kubernetesAuthorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_ca_cert: {
        value: cdktf.stringToHclTerraform(this._kubernetesCaCert),
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
      kubernetes_token: {
        value: cdktf.stringToHclTerraform(this._kubernetesToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cdktf.booleanToHclTerraform(this._managed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      management_project_id: {
        value: cdktf.stringToHclTerraform(this._managementProjectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
