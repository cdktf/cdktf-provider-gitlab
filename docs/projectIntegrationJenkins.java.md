# `projectIntegrationJenkins` Submodule <a name="`projectIntegrationJenkins` Submodule" id="@cdktf/provider-gitlab.projectIntegrationJenkins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectIntegrationJenkins <a name="ProjectIntegrationJenkins" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins gitlab_project_integration_jenkins}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jenkins.ProjectIntegrationJenkins;

ProjectIntegrationJenkins.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .jenkinsUrl(java.lang.String)
    .project(java.lang.String)
    .projectName(java.lang.String)
//  .enableSslVerification(java.lang.Boolean|IResolvable)
//  .mergeRequestEvents(java.lang.Boolean|IResolvable)
//  .password(java.lang.String)
//  .pushEvents(java.lang.Boolean|IResolvable)
//  .tagPushEvents(java.lang.Boolean|IResolvable)
//  .username(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.jenkinsUrl">jenkinsUrl</a></code> | <code>java.lang.String</code> | Jenkins URL like `http://jenkins.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.projectName">projectName</a></code> | <code>java.lang.String</code> | The URL-friendly project name. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable SSL verification. Defaults to `true` (enabled). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.mergeRequestEvents">mergeRequestEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Password for authentication with the Jenkins server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Username for authentication with the Jenkins server, if authentication is required by the server. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jenkinsUrl`<sup>Required</sup> <a name="jenkinsUrl" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.jenkinsUrl"></a>

- *Type:* java.lang.String

Jenkins URL like `http://jenkins.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#jenkins_url ProjectIntegrationJenkins#jenkins_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.project"></a>

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#project ProjectIntegrationJenkins#project}

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.projectName"></a>

- *Type:* java.lang.String

The URL-friendly project name. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#project_name ProjectIntegrationJenkins#project_name}

---

##### `enableSslVerification`<sup>Optional</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.enableSslVerification"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable SSL verification. Defaults to `true` (enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#enable_ssl_verification ProjectIntegrationJenkins#enable_ssl_verification}

---

##### `mergeRequestEvents`<sup>Optional</sup> <a name="mergeRequestEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.mergeRequestEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#merge_request_events ProjectIntegrationJenkins#merge_request_events}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Password for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#password ProjectIntegrationJenkins#password}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.pushEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#push_events ProjectIntegrationJenkins#push_events}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.tagPushEvents"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#tag_push_events ProjectIntegrationJenkins#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Username for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#username ProjectIntegrationJenkins#username}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetEnableSslVerification">resetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetMergeRequestEvents">resetMergeRequestEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPushEvents">resetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetTagPushEvents">resetTagPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnableSslVerification` <a name="resetEnableSslVerification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetEnableSslVerification"></a>

```java
public void resetEnableSslVerification()
```

##### `resetMergeRequestEvents` <a name="resetMergeRequestEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetMergeRequestEvents"></a>

```java
public void resetMergeRequestEvents()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPushEvents` <a name="resetPushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetPushEvents"></a>

```java
public void resetPushEvents()
```

##### `resetTagPushEvents` <a name="resetTagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetTagPushEvents"></a>

```java
public void resetTagPushEvents()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.resetUsername"></a>

```java
public void resetUsername()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectIntegrationJenkins resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jenkins.ProjectIntegrationJenkins;

ProjectIntegrationJenkins.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jenkins.ProjectIntegrationJenkins;

ProjectIntegrationJenkins.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jenkins.ProjectIntegrationJenkins;

ProjectIntegrationJenkins.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jenkins.ProjectIntegrationJenkins;

ProjectIntegrationJenkins.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProjectIntegrationJenkins.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProjectIntegrationJenkins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProjectIntegrationJenkins to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProjectIntegrationJenkins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProjectIntegrationJenkins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.active">active</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerificationInput">enableSslVerificationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrlInput">jenkinsUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEventsInput">mergeRequestEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectNameInput">projectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEventsInput">pushEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEventsInput">tagPushEventsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrl">jenkinsUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEvents">mergeRequestEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectName">projectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.active"></a>

```java
public IResolvable getActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `enableSslVerificationInput`<sup>Optional</sup> <a name="enableSslVerificationInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerificationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSslVerificationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jenkinsUrlInput`<sup>Optional</sup> <a name="jenkinsUrlInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrlInput"></a>

```java
public java.lang.String getJenkinsUrlInput();
```

- *Type:* java.lang.String

---

##### `mergeRequestEventsInput`<sup>Optional</sup> <a name="mergeRequestEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getMergeRequestEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectNameInput"></a>

```java
public java.lang.String getProjectNameInput();
```

- *Type:* java.lang.String

---

##### `pushEventsInput`<sup>Optional</sup> <a name="pushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getPushEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tagPushEventsInput`<sup>Optional</sup> <a name="tagPushEventsInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEventsInput"></a>

```java
public java.lang.Boolean|IResolvable getTagPushEventsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `enableSslVerification`<sup>Required</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.enableSslVerification"></a>

```java
public java.lang.Boolean|IResolvable getEnableSslVerification();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jenkinsUrl`<sup>Required</sup> <a name="jenkinsUrl" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.jenkinsUrl"></a>

```java
public java.lang.String getJenkinsUrl();
```

- *Type:* java.lang.String

---

##### `mergeRequestEvents`<sup>Required</sup> <a name="mergeRequestEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.mergeRequestEvents"></a>

```java
public java.lang.Boolean|IResolvable getMergeRequestEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

---

##### `pushEvents`<sup>Required</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.pushEvents"></a>

```java
public java.lang.Boolean|IResolvable getPushEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tagPushEvents`<sup>Required</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tagPushEvents"></a>

```java
public java.lang.Boolean|IResolvable getTagPushEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkins.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectIntegrationJenkinsConfig <a name="ProjectIntegrationJenkinsConfig" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.project_integration_jenkins.ProjectIntegrationJenkinsConfig;

ProjectIntegrationJenkinsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .jenkinsUrl(java.lang.String)
    .project(java.lang.String)
    .projectName(java.lang.String)
//  .enableSslVerification(java.lang.Boolean|IResolvable)
//  .mergeRequestEvents(java.lang.Boolean|IResolvable)
//  .password(java.lang.String)
//  .pushEvents(java.lang.Boolean|IResolvable)
//  .tagPushEvents(java.lang.Boolean|IResolvable)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.jenkinsUrl">jenkinsUrl</a></code> | <code>java.lang.String</code> | Jenkins URL like `http://jenkins.example.com`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.project">project</a></code> | <code>java.lang.String</code> | ID of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.projectName">projectName</a></code> | <code>java.lang.String</code> | The URL-friendly project name. Example: `my_project_name`. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.enableSslVerification">enableSslVerification</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable SSL verification. Defaults to `true` (enabled). |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.mergeRequestEvents">mergeRequestEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for merge request events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.password">password</a></code> | <code>java.lang.String</code> | Password for authentication with the Jenkins server, if authentication is required by the server. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.pushEvents">pushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.tagPushEvents">tagPushEvents</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable notifications for tag push events. |
| <code><a href="#@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.username">username</a></code> | <code>java.lang.String</code> | Username for authentication with the Jenkins server, if authentication is required by the server. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jenkinsUrl`<sup>Required</sup> <a name="jenkinsUrl" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.jenkinsUrl"></a>

```java
public java.lang.String getJenkinsUrl();
```

- *Type:* java.lang.String

Jenkins URL like `http://jenkins.example.com`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#jenkins_url ProjectIntegrationJenkins#jenkins_url}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

ID of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#project ProjectIntegrationJenkins#project}

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

The URL-friendly project name. Example: `my_project_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#project_name ProjectIntegrationJenkins#project_name}

---

##### `enableSslVerification`<sup>Optional</sup> <a name="enableSslVerification" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.enableSslVerification"></a>

```java
public java.lang.Boolean|IResolvable getEnableSslVerification();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable SSL verification. Defaults to `true` (enabled).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#enable_ssl_verification ProjectIntegrationJenkins#enable_ssl_verification}

---

##### `mergeRequestEvents`<sup>Optional</sup> <a name="mergeRequestEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.mergeRequestEvents"></a>

```java
public java.lang.Boolean|IResolvable getMergeRequestEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for merge request events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#merge_request_events ProjectIntegrationJenkins#merge_request_events}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#password ProjectIntegrationJenkins#password}

---

##### `pushEvents`<sup>Optional</sup> <a name="pushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.pushEvents"></a>

```java
public java.lang.Boolean|IResolvable getPushEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#push_events ProjectIntegrationJenkins#push_events}

---

##### `tagPushEvents`<sup>Optional</sup> <a name="tagPushEvents" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.tagPushEvents"></a>

```java
public java.lang.Boolean|IResolvable getTagPushEvents();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#tag_push_events ProjectIntegrationJenkins#tag_push_events}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-gitlab.projectIntegrationJenkins.ProjectIntegrationJenkinsConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for authentication with the Jenkins server, if authentication is required by the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.6.1/docs/resources/project_integration_jenkins#username ProjectIntegrationJenkins#username}

---



