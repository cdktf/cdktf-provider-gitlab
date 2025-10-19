# `projectCluster` Submodule <a name="`projectCluster` Submodule" id="@cdktf/provider-gitlab.projectCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectCluster <a name="ProjectCluster" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster gitlab_project_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer"></a>

```typescript
import { projectCluster } from '@cdktf/provider-gitlab'

new projectCluster.ProjectCluster(scope: Construct, id: string, config: ProjectClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig">ProjectClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig">ProjectClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetEnvironmentScope">resetEnvironmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesAuthorizationType">resetKubernetesAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesCaCert">resetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesNamespace">resetKubernetesNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetManagementProjectId">resetManagementProjectId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEnvironmentScope` <a name="resetEnvironmentScope" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetEnvironmentScope"></a>

```typescript
public resetEnvironmentScope(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubernetesAuthorizationType` <a name="resetKubernetesAuthorizationType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesAuthorizationType"></a>

```typescript
public resetKubernetesAuthorizationType(): void
```

##### `resetKubernetesCaCert` <a name="resetKubernetesCaCert" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesCaCert"></a>

```typescript
public resetKubernetesCaCert(): void
```

##### `resetKubernetesNamespace` <a name="resetKubernetesNamespace" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetKubernetesNamespace"></a>

```typescript
public resetKubernetesNamespace(): void
```

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetManaged"></a>

```typescript
public resetManaged(): void
```

##### `resetManagementProjectId` <a name="resetManagementProjectId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.resetManagementProjectId"></a>

```typescript
public resetManagementProjectId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isConstruct"></a>

```typescript
import { projectCluster } from '@cdktf/provider-gitlab'

projectCluster.ProjectCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformElement"></a>

```typescript
import { projectCluster } from '@cdktf/provider-gitlab'

projectCluster.ProjectCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformResource"></a>

```typescript
import { projectCluster } from '@cdktf/provider-gitlab'

projectCluster.ProjectCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.generateConfigForImport"></a>

```typescript
import { projectCluster } from '@cdktf/provider-gitlab'

projectCluster.ProjectCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ProjectCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProjectCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.platformType">platformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.providerType">providerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.environmentScopeInput">environmentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesApiUrlInput">kubernetesApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesAuthorizationTypeInput">kubernetesAuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesCaCertInput">kubernetesCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesNamespaceInput">kubernetesNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesTokenInput">kubernetesTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managedInput">managedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managementProjectIdInput">managementProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.environmentScope">environmentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesApiUrl">kubernetesApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesAuthorizationType">kubernetesAuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesToken">kubernetesToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managementProjectId">managementProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `platformType`<sup>Required</sup> <a name="platformType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.platformType"></a>

```typescript
public readonly platformType: string;
```

- *Type:* string

---

##### `providerType`<sup>Required</sup> <a name="providerType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.providerType"></a>

```typescript
public readonly providerType: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentScopeInput`<sup>Optional</sup> <a name="environmentScopeInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.environmentScopeInput"></a>

```typescript
public readonly environmentScopeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesApiUrlInput`<sup>Optional</sup> <a name="kubernetesApiUrlInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesApiUrlInput"></a>

```typescript
public readonly kubernetesApiUrlInput: string;
```

- *Type:* string

---

##### `kubernetesAuthorizationTypeInput`<sup>Optional</sup> <a name="kubernetesAuthorizationTypeInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesAuthorizationTypeInput"></a>

```typescript
public readonly kubernetesAuthorizationTypeInput: string;
```

- *Type:* string

---

##### `kubernetesCaCertInput`<sup>Optional</sup> <a name="kubernetesCaCertInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesCaCertInput"></a>

```typescript
public readonly kubernetesCaCertInput: string;
```

- *Type:* string

---

##### `kubernetesNamespaceInput`<sup>Optional</sup> <a name="kubernetesNamespaceInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesNamespaceInput"></a>

```typescript
public readonly kubernetesNamespaceInput: string;
```

- *Type:* string

---

##### `kubernetesTokenInput`<sup>Optional</sup> <a name="kubernetesTokenInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesTokenInput"></a>

```typescript
public readonly kubernetesTokenInput: string;
```

- *Type:* string

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managedInput"></a>

```typescript
public readonly managedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managementProjectIdInput`<sup>Optional</sup> <a name="managementProjectIdInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managementProjectIdInput"></a>

```typescript
public readonly managementProjectIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentScope`<sup>Required</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.environmentScope"></a>

```typescript
public readonly environmentScope: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesApiUrl`<sup>Required</sup> <a name="kubernetesApiUrl" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesApiUrl"></a>

```typescript
public readonly kubernetesApiUrl: string;
```

- *Type:* string

---

##### `kubernetesAuthorizationType`<sup>Required</sup> <a name="kubernetesAuthorizationType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesAuthorizationType"></a>

```typescript
public readonly kubernetesAuthorizationType: string;
```

- *Type:* string

---

##### `kubernetesCaCert`<sup>Required</sup> <a name="kubernetesCaCert" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesCaCert"></a>

```typescript
public readonly kubernetesCaCert: string;
```

- *Type:* string

---

##### `kubernetesNamespace`<sup>Required</sup> <a name="kubernetesNamespace" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

---

##### `kubernetesToken`<sup>Required</sup> <a name="kubernetesToken" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.kubernetesToken"></a>

```typescript
public readonly kubernetesToken: string;
```

- *Type:* string

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managementProjectId`<sup>Required</sup> <a name="managementProjectId" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.managementProjectId"></a>

```typescript
public readonly managementProjectId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.projectCluster.ProjectCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectClusterConfig <a name="ProjectClusterConfig" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.Initializer"></a>

```typescript
import { projectCluster } from '@cdktf/provider-gitlab'

const projectClusterConfig: projectCluster.ProjectClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesApiUrl">kubernetesApiUrl</a></code> | <code>string</code> | The URL to access the Kubernetes API. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesToken">kubernetesToken</a></code> | <code>string</code> | The token to authenticate against Kubernetes. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.name">name</a></code> | <code>string</code> | The name of cluster. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.project">project</a></code> | <code>string</code> | The id of the project to add the cluster to. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.domain">domain</a></code> | <code>string</code> | The base domain of the cluster. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.environmentScope">environmentScope</a></code> | <code>string</code> | The associated environment to the cluster. Defaults to `*`. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#id ProjectCluster#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesAuthorizationType">kubernetesAuthorizationType</a></code> | <code>string</code> | The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>string</code> | TLS certificate (needed if API is using a self-signed TLS certificate). |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesNamespace">kubernetesNamespace</a></code> | <code>string</code> | The unique namespace related to the project. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.managementProjectId">managementProjectId</a></code> | <code>string</code> | The ID of the management project for the cluster. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `kubernetesApiUrl`<sup>Required</sup> <a name="kubernetesApiUrl" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesApiUrl"></a>

```typescript
public readonly kubernetesApiUrl: string;
```

- *Type:* string

The URL to access the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#kubernetes_api_url ProjectCluster#kubernetes_api_url}

---

##### `kubernetesToken`<sup>Required</sup> <a name="kubernetesToken" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesToken"></a>

```typescript
public readonly kubernetesToken: string;
```

- *Type:* string

The token to authenticate against Kubernetes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#kubernetes_token ProjectCluster#kubernetes_token}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#name ProjectCluster#name}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The id of the project to add the cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#project ProjectCluster#project}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The base domain of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#domain ProjectCluster#domain}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#enabled ProjectCluster#enabled}

---

##### `environmentScope`<sup>Optional</sup> <a name="environmentScope" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.environmentScope"></a>

```typescript
public readonly environmentScope: string;
```

- *Type:* string

The associated environment to the cluster. Defaults to `*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#environment_scope ProjectCluster#environment_scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#id ProjectCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesAuthorizationType`<sup>Optional</sup> <a name="kubernetesAuthorizationType" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesAuthorizationType"></a>

```typescript
public readonly kubernetesAuthorizationType: string;
```

- *Type:* string

The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#kubernetes_authorization_type ProjectCluster#kubernetes_authorization_type}

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesCaCert"></a>

```typescript
public readonly kubernetesCaCert: string;
```

- *Type:* string

TLS certificate (needed if API is using a self-signed TLS certificate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#kubernetes_ca_cert ProjectCluster#kubernetes_ca_cert}

---

##### `kubernetesNamespace`<sup>Optional</sup> <a name="kubernetesNamespace" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.kubernetesNamespace"></a>

```typescript
public readonly kubernetesNamespace: string;
```

- *Type:* string

The unique namespace related to the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#kubernetes_namespace ProjectCluster#kubernetes_namespace}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#managed ProjectCluster#managed}

---

##### `managementProjectId`<sup>Optional</sup> <a name="managementProjectId" id="@cdktf/provider-gitlab.projectCluster.ProjectClusterConfig.property.managementProjectId"></a>

```typescript
public readonly managementProjectId: string;
```

- *Type:* string

The ID of the management project for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.5.0/docs/resources/project_cluster#management_project_id ProjectCluster#management_project_id}

---



