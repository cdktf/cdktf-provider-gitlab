# `complianceFramework` Submodule <a name="`complianceFramework` Submodule" id="@cdktf/provider-gitlab.complianceFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComplianceFramework <a name="ComplianceFramework" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/compliance_framework gitlab_compliance_framework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer"></a>

```typescript
import { complianceFramework } from '@cdktf/provider-gitlab'

new complianceFramework.ComplianceFramework(scope: Construct, id: string, config: ComplianceFrameworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig">ComplianceFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig">ComplianceFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetPipelineConfigurationFullPath">resetPipelineConfigurationFullPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetPipelineConfigurationFullPath` <a name="resetPipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.resetPipelineConfigurationFullPath"></a>

```typescript
public resetPipelineConfigurationFullPath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComplianceFramework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isConstruct"></a>

```typescript
import { complianceFramework } from '@cdktf/provider-gitlab'

complianceFramework.ComplianceFramework.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformElement"></a>

```typescript
import { complianceFramework } from '@cdktf/provider-gitlab'

complianceFramework.ComplianceFramework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformResource"></a>

```typescript
import { complianceFramework } from '@cdktf/provider-gitlab'

complianceFramework.ComplianceFramework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport"></a>

```typescript
import { complianceFramework } from '@cdktf/provider-gitlab'

complianceFramework.ComplianceFramework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComplianceFramework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComplianceFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComplianceFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/compliance_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComplianceFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.frameworkId">frameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.colorInput">colorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.defaultInput">defaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePathInput">namespacePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPathInput">pipelineConfigurationFullPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.color">color</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePath">namespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPath">pipelineConfigurationFullPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `frameworkId`<sup>Required</sup> <a name="frameworkId" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.frameworkId"></a>

```typescript
public readonly frameworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `colorInput`<sup>Optional</sup> <a name="colorInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.colorInput"></a>

```typescript
public readonly colorInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.defaultInput"></a>

```typescript
public readonly defaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespacePathInput`<sup>Optional</sup> <a name="namespacePathInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePathInput"></a>

```typescript
public readonly namespacePathInput: string;
```

- *Type:* string

---

##### `pipelineConfigurationFullPathInput`<sup>Optional</sup> <a name="pipelineConfigurationFullPathInput" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPathInput"></a>

```typescript
public readonly pipelineConfigurationFullPathInput: string;
```

- *Type:* string

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.namespacePath"></a>

```typescript
public readonly namespacePath: string;
```

- *Type:* string

---

##### `pipelineConfigurationFullPath`<sup>Required</sup> <a name="pipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.pipelineConfigurationFullPath"></a>

```typescript
public readonly pipelineConfigurationFullPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFramework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComplianceFrameworkConfig <a name="ComplianceFrameworkConfig" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.Initializer"></a>

```typescript
import { complianceFramework } from '@cdktf/provider-gitlab'

const complianceFrameworkConfig: complianceFramework.ComplianceFrameworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.color">color</a></code> | <code>string</code> | New color representation of the compliance framework in hex format. e.g. #FCA121. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.description">description</a></code> | <code>string</code> | Description for the compliance framework. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.name">name</a></code> | <code>string</code> | Name for the compliance framework. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.namespacePath">namespacePath</a></code> | <code>string</code> | Full path of the namespace to add the compliance framework to. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.default">default</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set this compliance framework as the default framework for the group. Default: `false`. |
| <code><a href="#@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.pipelineConfigurationFullPath">pipelineConfigurationFullPath</a></code> | <code>string</code> | Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Required format: `path/file.y[a]ml@group-name/project-name` **Note**: Ultimate license required. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `color`<sup>Required</sup> <a name="color" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

New color representation of the compliance framework in hex format. e.g. #FCA121.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/compliance_framework#color ComplianceFramework#color}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description for the compliance framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/compliance_framework#description ComplianceFramework#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name for the compliance framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/compliance_framework#name ComplianceFramework#name}

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.namespacePath"></a>

```typescript
public readonly namespacePath: string;
```

- *Type:* string

Full path of the namespace to add the compliance framework to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/compliance_framework#namespace_path ComplianceFramework#namespace_path}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.default"></a>

```typescript
public readonly default: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set this compliance framework as the default framework for the group. Default: `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/compliance_framework#default ComplianceFramework#default}

---

##### `pipelineConfigurationFullPath`<sup>Optional</sup> <a name="pipelineConfigurationFullPath" id="@cdktf/provider-gitlab.complianceFramework.ComplianceFrameworkConfig.property.pipelineConfigurationFullPath"></a>

```typescript
public readonly pipelineConfigurationFullPath: string;
```

- *Type:* string

Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Required format: `path/file.y[a]ml@group-name/project-name` **Note**: Ultimate license required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.10.0/docs/resources/compliance_framework#pipeline_configuration_full_path ComplianceFramework#pipeline_configuration_full_path}

---



